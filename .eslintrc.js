module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:import/recommended', 'preact'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    semi: 'off',
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
  },
}
