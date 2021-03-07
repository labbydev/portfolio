module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier'],
  rules: {},
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
    },
  ],
};
