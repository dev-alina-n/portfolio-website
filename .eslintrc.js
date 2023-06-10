module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        indent: [2, 4],
        'react/jsx-indent': [2, 4],
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent-props': [2, 4],
        'react/function-component-definition': 'off',
        'import/extensions': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
        'import/no-extraneous-dependencies': 'off',
        'no-shadow': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
};
