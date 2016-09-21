'use strict';

const { createLogger } = require('@carnesen/util');

const { name } = require('../package.json');

const conf = require('@carnesen/bitcoin-conf');
const manager = require('@carnesen/bitcoin-manager');

const log = createLogger(name, { console: true });

conf.log.register(log.consoleLogger);
manager.log.register(log.consoleLogger);
