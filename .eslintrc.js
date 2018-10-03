module.exports = {
  "extends": [
    "airbnb",
    "plugin:react/recommended",
  ],

  "rules": {
    "react/display-name": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
  },

  "plugins": [
    "babel",
    "react",
  ],

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
