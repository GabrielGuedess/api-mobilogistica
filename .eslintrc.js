module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'es2020',
  },
  plugins: [
    'jest',
    'import',
    'prettier',
    '@darraghor/nestjs-typed',
    'eslint-plugin-import-helpers',
    '@typescript-eslint/eslint-plugin',
  ],
  extends: [
    'prettier',
    'plugin:jest/style',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@darraghor/nestjs-typed/no-swagger',
    'plugin:@darraghor/nestjs-typed/recommended',
  ],
  env: {
    node: true,
    jest: true,
    'jest/globals': true,
  },
  overrides: [
    {
      files: ['**.spec.ts'],
      rules: {
        'import/extensions': 'off',
      },
    },
  ],
  rules: {
    'prettier/prettier': 'error',
    'jest/expect-expect': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@darraghor/nestjs-typed/injectable-should-be-provided': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/node/',
          '/@nestjs/',
          'module',
          '/^app/',
          '/^infra/',
          '/^helpers/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
