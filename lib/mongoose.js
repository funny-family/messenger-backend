const mongoose = require('mongoose');
const config = require('config');
const log = require('./logger').child({ level: 'fatal' });

mongoose.Promise = global.Promise;

mongoose.connect(config.mongoose.uri, config.mongoose.options).catch(err => {
  console.error(err);
  log.fatal(err);
});

mongoose.connection.on('connected', () => {
  console.info('\x1b[32m', `Connected to ${config.mongoose.dbName} db`);
});

module.exports = mongoose;