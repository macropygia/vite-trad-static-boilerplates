module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  plugins: [
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'eslint-plugin-tsdoc',
  ],
  parserOptions: {
    project: [
      './tsconfig.json',
      './tsconfig.node.json',
    ],
    tsconfigRootDir: './',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // for eslint-plugin-react
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    // for DOM
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-param-reassign': ['error', { props: false }],
    // Parse absolute paths with TypeScript
    'import/no-absolute-path': 'off',
    // Allow both types of exports.
    'import/no-default-export': 'off',
    'import/prefer-default-export': 'off',
    // for React >= 17
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
  overrides: [
    {
      // for environment
      files: ['scripts/**/*.{js,cjs,mjs,ts}', '*.{js,cjs,mjs,ts}'],
      env: { node: true },
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'no-console': 'off',
      },
    },
    {
      // for CommonJS
      files: ['scripts/**/*.cjs', '*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
}
