'use strict';

const { createLogger } = require('@carnesen/util');

const { name } = require('../package.json');

const conf = require('@carnesen/bitcoin-conf');
const launch = require('@carnesen/bitcoin-launch');

const log = createLogger(name, { console: true });

conf.log.register(log.consoleLogger);
launch.log.register(log.consoleLogger);
