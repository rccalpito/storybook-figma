/**
 * Fetches design tokens (Variables) from Figma's REST API
 * and writes them as Style Dictionary-compatible JSON.
 *
 * Usage: npx tsx scripts/sync-tokens.ts
 *
 * Requires env vars: FIGMA_ACCESS_TOKEN, FIGMA_FILE_KEY
 */

import { writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const TOKENS_DIR = resolve(__dirname, '..', 'tokens')

interface FigmaVariable {
  id: string
  name: string
  resolvedType: string
  valuesByMode: Record<string, FigmaVariableValue>
}

interface FigmaVariableCollection {
  id: string
  name: string
  modes: { modeId: string; name: string }[]
  variableIds: string[]
}

type FigmaVariableValue =
  | { r: number; g: number; b: number; a: number }
  | number
  | string
  | { type: 'VARIABLE_ALIAS'; id: string }

interface FigmaVariablesResponse {
  status: number
  error: boolean
  meta: {
    variableCollections: Record<string, FigmaVariableCollection>
    variables: Record<string, FigmaVariable>
  }
}

function rgbaToHex(r: number, g: number, b: number, a: number): string {
  const toHex = (v: number) =>
    Math.round(v * 255)
      .toString(16)
      .padStart(2, '0')
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`
  return a < 1 ? `${hex}${toHex(a)}` : hex
}

function variableNameToPath(name: string): string[] {
  return name.split('/').map((part) => part.trim().toLowerCase().replace(/\s+/g, '-'))
}

function resolveValue(
  value: FigmaVariableValue,
  variables: Record<string, FigmaVariable>,
  modeId: string,
): string | number {
  if (typeof value === 'number') return value
  if (typeof value === 'string') return value
  if ('type' in value && value.type === 'VARIABLE_ALIAS') {
    const aliased = variables[value.id]
    if (!aliased) return ''
    const firstMode = Object.keys(aliased.valuesByMode)[0]
    return resolveValue(aliased.valuesByMode[firstMode], variables, modeId)
  }
  // Color object
  if ('r' in value) {
    return rgbaToHex(value.r, value.g, value.b, value.a)
  }
  return String(value)
}

function setNestedValue(
  obj: Record<string, unknown>,
  path: string[],
  value: { value: string | number },
) {
  let current = obj
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i]
    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = {}
    }
    current = current[key] as Record<string, unknown>
  }
  current[path[path.length - 1]] = value
}

async function fetchFigmaVariables(): Promise<FigmaVariablesResponse> {
  const token = process.env.FIGMA_ACCESS_TOKEN
  const fileKey = process.env.FIGMA_FILE_KEY

  if (!token) {
    console.error('Missing FIGMA_ACCESS_TOKEN environment variable')
    process.exit(1)
  }
  if (!fileKey) {
    console.error('Missing FIGMA_FILE_KEY environment variable')
    process.exit(1)
  }

  const url = `https://api.figma.com/v1/files/${fileKey}/variables/local`
  console.log(`Fetching variables from Figma file: ${fileKey}`)

  const response = await fetch(url, {
    headers: { 'X-Figma-Token': token },
  })

  if (!response.ok) {
    const body = await response.text()
    console.error(`Figma API error (${response.status}): ${body}`)
    process.exit(1)
  }

  return response.json() as Promise<FigmaVariablesResponse>
}

async function main() {
  const data = await fetchFigmaVariables()
  const { variableCollections, variables } = data.meta

  mkdirSync(TOKENS_DIR, { recursive: true })

  for (const collection of Object.values(variableCollections)) {
    console.log(`Processing collection: ${collection.name}`)

    // Use the first mode (typically "Light" or "Default")
    const mode = collection.modes[0]
    const tokens: Record<string, unknown> = {}

    for (const varId of collection.variableIds) {
      const variable = variables[varId]
      if (!variable) continue

      const rawValue = variable.valuesByMode[mode.modeId]
      if (rawValue === undefined) continue

      const resolved = resolveValue(rawValue, variables, mode.modeId)
      const path = variableNameToPath(variable.name)

      setNestedValue(tokens, path, { value: resolved })
    }

    const fileName = collection.name.toLowerCase().replace(/\s+/g, '-')
    const outPath = resolve(TOKENS_DIR, `${fileName}.json`)
    writeFileSync(outPath, JSON.stringify(tokens, null, 2) + '\n')
    console.log(`  → Written to ${outPath}`)
  }

  console.log('Token sync complete.')
}

main()
