module.exports = {
  "extends": [
    "airbnb",
    "plugin:react/recommended",
  ],

  "rules": {
    "react/jsx-filename-extension": "off"
  },

  "plugins": [
    "babel",
  ],
  "parser": "babel-eslint",

  "settings": {
    "import/resolver": {
      "babel-module": {
        "root": ['.'],
      }
    }
  }
};
