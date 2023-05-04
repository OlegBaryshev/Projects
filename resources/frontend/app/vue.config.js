module.exports = {
 devServer: {
   proxy: 'http://laravel.test'
 },

  outputDir: '../../../public/assets/app',

  publicPath: process.env.NODE_ENV === 'production'
 ? '/assets/app/'
 : '/',

  indexPath: process.env.NODE_ENV === 'production'
 ? '../../../resources/views/app.blade.php'
 : 'index.html',

 chainWebpack: config => {
  config.plugin('define').tap(definitions => {
      definitions[0] = Object.assign(definitions[0], {
          $: 'jquery',
          jquery: 'jquery',
          'window.jQuery': 'jquery',
          jQuery: 'jquery',
          _: 'lodash'
      })
      return definitions
  })
}
}