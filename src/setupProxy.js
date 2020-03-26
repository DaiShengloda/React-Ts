const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/public', {
    target: 'http://pfzone.senguo.cc',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/public": "/"
    }
  }))
}