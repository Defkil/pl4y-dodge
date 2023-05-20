module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['solid'],
  extends: ['standard-with-typescript', 'plugin:solid/typescript'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
  },
  ignorePatterns: [
    'dist/',
    'node_modules/',
    '**/*.js',
  ]
}
