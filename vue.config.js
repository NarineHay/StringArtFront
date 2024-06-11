const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.VUE_APP_PUBLIC_PATH || '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://backend.neteniti.ru',
        changeOrigin: true,
        pathRewrite: { '^/api': '/api' },
      },
    },
  },
})
