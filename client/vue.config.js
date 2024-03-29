const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
//   outputDir: '../server/',
  outputDir: 'dist/',
  assetsDir: 'static',
  indexPath: 'templates/index.html',
  css: {
    loaderOptions: {
        scss: {
            prependData: '@import "./src/static/scss/prepends.scss";'
        }
    }
  },
  chainWebpack: config => {
        config.optimization
        .splitChunks(false)

        config.plugin('StyleLintPlugin')
        .use(StyleLintPlugin, [{
            configFile: 'stylelint.config.js',
            files: [
                // '**/*.{vue, css, scss}'
                '**/*.vue',
                '**/*.scss',
            ],
        }])

        config.devServer
        .public('http://0.0.0.0:8080')
        .host('0.0.0.0')
        .port(8080)
        .hotOnly(true)
        .watchOptions({
            poll: 1000,
            ignored: /node_modules/,
            aggregateTimeout: 300
        })
        .headers({ 'Access-Control-Allow-Origin': ['\*'] })

        config.resolve.alias
        .set('vue$', 'vue/dist/vue.esm.js')
    }
}
