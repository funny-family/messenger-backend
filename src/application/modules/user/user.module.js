const { RouterFactory } = require('../../framework/core');

module.exports = RouterFactory.initialize({
  routers: [
    require('./user.controller')
  ]
});
