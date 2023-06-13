/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc.json'), 'utf8'),
);

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', 'import'],
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    '@typescript-eslint/no-explicit-any': 'off',
    // 'import/order': [
    //   'error',
    //   {
    //     alphabetize: {
    //       order: 'asc',
    //       caseInsensitive: true,
    //     },
    //     'newlines-between': 'never',
    //     groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
    //     pathGroups: [
    //       {
    //         pattern: 'react',
    //         group: 'external',
    //         position: 'before',
    //       },
    //     ],
    //     pathGroupsExcludedImportTypes: ['builtin'],
    //   },
    // ],
    // 'sort-imports': ['error', { ignoreDeclarationSort: true }],
    // 'no-restricted-imports': [
    //   'error',
    //   {
    //     paths: [
    //       {
    //         name: '@reduxjs/toolkit',
    //         importNames: ['createAsyncThunk', 'createSlice'],
    //         message:
    //           "Don't import createSlice/createAsyncThunk from @reduxjs/toolkit. Instead import appCreateSlice/appCreateAsyncThunk from app/redux/tools",
    //       },
    //       {
    //         name: 'react-redux',
    //         importNames: ['useDispatch', 'useSelector'],
    //         message:
    //           "Don't import useDispatch/useSelector from react-redux. Instead import useAppDispatch/useAppSelector from app/redux/hooks",
    //       },
    //       {
    //         name: 'redux-injectors',
    //         importNames: [
    //           'injectReducer',
    //           'injectSaga',
    //           'useInjectReducer',
    //           'useInjectSaga',
    //         ],
    //         message:
    //           "Don't import injects from redux-injectors. Instead import injectStores from app/redux/injector",
    //       },
    //       {
    //         name: 'react-toastify',
    //         message:
    //           "Don't import any from react-toastify. Instead import from app/notification",
    //       },
    //     ],
    //   },
    // ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: path.resolve(__dirname, 'tsconfig.json'),
      },
    },
  },
};