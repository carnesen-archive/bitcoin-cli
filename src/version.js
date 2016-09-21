'use strict';

const manager = require('@carnesen/bitcoin-manager');

module.exports = {
  name: 'version',
  description: 'shows the version of bitcoind currently running',
  parameters: [],
  execute: manager.getRunningVersion
};
