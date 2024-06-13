import babelParser from '@babel/eslint-parser'
import js from '@eslint/js'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'
import tailwindcssPlugin from 'eslint-plugin-tailwindcss'
import vitestGlobalsPlugin from 'eslint-plugin-vitest-globals'

const globalIgnorePatterns = ['node_modules', 'dist']

export default [
  // ESLint base configurations
  js.configs.recommended,

  // TypeScript configurations
  {
    ignores: globalIgnorePatterns,
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: './tsconfig.json', // Ensure it uses your tsconfig.json
      },
      globals: {
        window: true,
        document: true,
        Image: true,
        setTimeout: true,
        clearTimeout: true,
        console: true,
        browser: true,
        es2021: true,
        node: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      import: importPlugin,
      react: reactPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      'no-unused-vars': 'off', // Handled by @typescript-eslint/no-unused-vars
      '@typescript-eslint/no-unused-vars': ['error'], // Enable TypeScript version of no-unused-vars
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'react/react-in-jsx-scope': 'off', // Preact doesn't require React to be in scope
    },
  },

  // JavaScript configurations
  {
    ignores: globalIgnorePatterns,
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        requireConfigFile: false, // To use the parser without a Babel config file
        babelOptions: {
          presets: ['@babel/preset-react'], // To ensure JSX is parsed correctly
        },
      },
      globals: {
        window: true,
        document: true,
        Image: true,
        setTimeout: true,
        clearTimeout: true,
        console: true,
        browser: true,
        es2021: true,
        node: true,
      },
    },
    plugins: {
      import: importPlugin,
      react: reactPlugin,
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'react/react-in-jsx-scope': 'off', // Preact doesn't require React to be in scope
    },
  },

  // Prettier configurations with ban rule
  {
    ignores: globalIgnorePatterns,
    files: ['**/*.{js,ts,jsx,tsx}', 'eslint.config.js'],
    plugins: {
      prettier: prettierPlugin,
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Literal[value=/(^|\\s)gap-\\d+/]',
          message: 'Do not use gap-* classes.',
        },
      ],
    },
  },

  // Vitest globals configurations
  {
    ignores: globalIgnorePatterns,
    files: ['**/*.test.ts', '**/*.spec.ts', '**/__mocks__/**/*.ts'],
    plugins: {
      vitestGlobals: vitestGlobalsPlugin,
    },
    rules: {
      'no-undef': 'off', // Disable the default no-undef rule
    },
  },
]
