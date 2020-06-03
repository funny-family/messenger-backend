require('dotenv').config();
const config = require('config');
const http = require('http');
const Koa = require('koa');
const logger = require('koa-logger');
const responseTime = require('koa-response-time');

const app = new Koa();
const server = http.createServer(app.callback());

global.__PROD__ = 'production';
global.__DEV__ = 'development';

app.proxy = false;

if (global.__DEV__ === process.env.NODE_ENV) {
  app.use(logger());
}

app.use(responseTime({ hrtime: false }));

server.listen(config.port, () => {
  console.log('\x1b[36m', `Server running at: http://localhost:${config.port}/`);
  console.log('\x1b[35m', 'Mode:', global.__DEV__);
  console.log('\x1b[36m', 'Am I developing?', global.__DEV__ === process.env.NODE_ENV);
});