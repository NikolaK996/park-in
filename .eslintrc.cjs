/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx, vue}'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['import'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
        pathGroups: [
          {
            pattern: 'vue',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: 'vuefire',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: '@vue-leaflet/**',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: '*.vue',
            group: 'index',
            position: 'after'
          }
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'prettier/prettier': [
      'warn',
      {
        htmlWhitespaceSensitivity: 'strict'
      }
    ],
    'no-trailing-spaces': 'error'
  }
}
