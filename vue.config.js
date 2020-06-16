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
    proxy: {

      '^/auth': {
        preserveHostHdr: true,
        target: 'http://localhost:7001/',
      },
      '^/graphql-shopify': {
        changeOrigin: true,
        target: 'http://localhost:7001/',
      },
    },
  },
};
