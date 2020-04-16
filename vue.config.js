module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: '/openedu/anon/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'production',
  productionSourceMap: true,
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
  },

}