module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  configureWebpack: {
    externals: {
    },
  },
  css: {
    sourceMap: true,
  },
  devServer: {
    disableHostCheck: true,
    proxy: 'http://localhost:7001',
  },
};
