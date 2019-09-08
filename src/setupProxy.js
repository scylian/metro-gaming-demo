const proxy = require('http-proxy-middleware');

module.exports = app => {

  app.use(
    "/api",
    proxy({
      target: 'https://api.smash.gg/gql/alpha',
      pathRewrite: {
        '^/api': '' // remove base path
      },
      changeOrigin: true,
      onProxyReq: function onProxyReq(proxyReq, req, res) {
        // Log outbound request to remote target
        console.log('-->  ', req.method, req.path, '->', proxyReq.baseUrl + proxyReq.path);
      },
    })
  );

};