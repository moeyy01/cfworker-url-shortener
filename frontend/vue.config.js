// ensure env
['VUE_APP_ADDITION_HEAD'].forEach(name => (process.env[name] = process.env[name] || ''));

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'https://cdn.moeyy.cn/url_vue/' : '',
  productionSourceMap: false,
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    externals: {
      vue: 'Vue',
    },
    performance: {
      hints: false,
    },
  },
  chainWebpack: config => {
    config.plugins.delete('preload').delete('prefetch');
  },
  devServer: {
    proxy: {
      '/shorten': {
        target: 'http://localhost:7000',
      },
    },
  },
};
