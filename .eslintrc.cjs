/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/eslint-config-prettier/skip-formatting'
    ],
    overrides: [
        {
            files: [
                'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx, vue}'
            ],
            'extends': [
                'plugin:cypress/recommended'
            ]
        }
    ],
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 'latest'
    }
}
