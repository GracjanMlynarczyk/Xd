module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        semi: true,
        printWidth: 120,
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'no-var': 'error',
    'no-console': 'warn',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'internal', 'index', 'parent', 'sibling'],
        pathGroups: [
          {
            pattern: '{react,react**}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{@tests,@tests/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{@urls}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{@utils,@utils/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{@redux,@redux/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{@hooks,@hooks/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{@components/layouts,@components/layouts/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{@views,@views/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{@components,@components/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{@components/common,@components/common/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{@models,@models/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{@types,@types/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{**.data}',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: '{**.styled,style/**,@styles,@styles/**}',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: '{@assets/**}',
            group: 'sibling',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'import/no-cycle': 'error',
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/require-default-props': 'off',
    camelcase: 'off',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    AppcuesReady: true,
    Appcues: true,
  },
  ignorePatterns: ['build/*', 'node_modules/*', 'react-app-env.d.ts', '*.svg', '*.mdx', '*.css'],
};
