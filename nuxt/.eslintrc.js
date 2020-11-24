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
      // タブの許容
      'no-tabs': 'off',
      // インデントの一貫性を許容
      'indent': 'off',
      // 末尾のコンマを許容
      'comma-dangle': 'off',
      // 混合スペースとタブを許容
      'no-mixed-spaces-and-tabs': 'off',
      // アロー関数の()なしを許容
      'arrow-parens': 'off',
      // オブジェクト宣言の簡易的な書き方を許容
      'object-shorthand': 'off',
      // カーリーブレース規則を許容
      'curly': 'off',
      // htmlのインデントの許容
      'vue/html-indent': 'off',
      // htmlのシングルクォートの許容
      'vue/html-quotes': 'off',
      // 予期しないコンソールログを許容
      'no-console': 'off',
      // htmlを１行記述を許容
      'vue/singleline-html-element-content-newline': 'off',
      // vueの細かい属性の記述順を許容
      'vue/attributes-order': 'off',
  }
}
