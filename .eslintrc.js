const path = require('path');

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  plugins: ['babel', 'react', 'jest'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'arrow-body-style': 'off',
    'react/display-name': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, packageDir: path.join(__dirname, './') },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        root: ['.'],
      },
    },
  },
};
