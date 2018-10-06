module.exports = {
  "extends": [
    "airbnb",
    "plugin:react/recommended",
  ],

  "rules": {
    "no-console": "off",
    "no-unused-vars": "warn",
    "arrow-body-style": "off",
    "react/display-name": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "react/prefer-stateless-function": "off",
  },

  "plugins": [
    "babel",
    "react",
  ],

  // "env": {
  //   "node": true,
  //   "browser": true,
  // }

  // "parserOptions": {
  //   "ecmaFeatures": {
  //     "jsx": true
  //   }
  // },

  "parser": "babel-eslint",

  "settings": {
    "import/resolver": {
      "babel-module": {
        "root": ['.'],
      }
    }
  }
};
