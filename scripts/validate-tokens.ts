/**
 * Scans all *.module.css files and reports references
 * to undefined CSS custom properties not present in tokens.css.
 *
 * Usage: npx tsx scripts/validate-tokens.ts
 */

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { resolve, relative, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const TOKENS_FILE = resolve(ROOT, 'src', 'styles', 'tokens.css')
const SRC_DIR = resolve(ROOT, 'src')

function extractDefinedTokens(css: string): Set<string> {
  const tokens = new Set<string>()
  const re = /--([\w-]+)\s*:/g
  let match
  while ((match = re.exec(css)) !== null) {
    tokens.add(`--${match[1]}`)
  }
  return tokens
}

function extractReferencedTokens(
  css: string,
): { token: string; line: number }[] {
  const refs: { token: string; line: number }[] = []
  const lines = css.split('\n')
  for (let i = 0; i < lines.length; i++) {
    const re = /var\(\s*(--[\w-]+)/g
    let match
    while ((match = re.exec(lines[i])) !== null) {
      refs.push({ token: match[1], line: i + 1 })
    }
  }
  return refs
}

function walkFiles(dir: string, pattern: RegExp): string[] {
  const results: string[] = []
  for (const entry of readdirSync(dir)) {
    const full = resolve(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) {
      results.push(...walkFiles(full, pattern))
    } else if (pattern.test(entry)) {
      results.push(full)
    }
  }
  return results
}

function main() {
  const tokensCss = readFileSync(TOKENS_FILE, 'utf-8')
  const defined = extractDefinedTokens(tokensCss)

  console.log(`Found ${defined.size} defined tokens in tokens.css\n`)

  const cssFiles = walkFiles(SRC_DIR, /\.module\.css$/)
  let totalErrors = 0

  for (const file of cssFiles) {
    const css = readFileSync(file, 'utf-8')
    const refs = extractReferencedTokens(css)
    const undefined_refs = refs.filter((r) => !defined.has(r.token))

    if (undefined_refs.length > 0) {
      const rel = relative(ROOT, file)
      console.log(`${rel}:`)
      for (const ref of undefined_refs) {
        console.log(`  line ${ref.line}: ${ref.token} (undefined)`)
        totalErrors++
      }
      console.log()
    }
  }

  if (totalErrors === 0) {
    console.log('All CSS variable references resolve to defined tokens.')
  } else {
    console.log(`Found ${totalErrors} undefined token reference(s).`)
    process.exit(1)
  }
}

main()
