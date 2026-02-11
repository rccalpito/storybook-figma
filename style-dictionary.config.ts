/**
 * Style Dictionary configuration
 *
 * Transforms JSON tokens (from Figma Variables) into CSS custom properties.
 * Output: src/styles/tokens.css
 *
 * Usage: npx style-dictionary build --config style-dictionary.config.ts
 */

import type { Config } from 'style-dictionary'

const config: Config = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
}

export default config
