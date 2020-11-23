module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
      'no-tabs': 'off',
      'indent': 'off',
      'comma-dangle': 'off',
      'no-mixed-spaces-and-tabs': 'off'
  }
}
