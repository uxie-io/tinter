module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:import/recommended', 'airbnb', 'preact'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [],
  settings: {
    'import/extensions': ['.js', '.jsx'],
  },
  rules: {
    semi: 'off',
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
  },
}
