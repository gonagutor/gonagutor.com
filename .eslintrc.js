module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  globals: {
    JSX: true,
  },
  rules: {
    'react/jsx-filename-extension': [0, { allow: 'as-needed' }],
    'import/no-unresolved': [0],
    'import/extensions': [0],
    'jsx-a11y/anchor-is-valid': [0],
    'react/no-unescaped-entities': [0],
    'no-use-before-define': [0],
    'jsx-a11y/label-has-associated-control': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'jsx-a11y/label-has-for': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
  },
};
