const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/imageData',
    createProxyMiddleware({
      target: 'https://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: {
          "^/imageData": "/photos"
      }
    })
  );
};