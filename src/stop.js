'use strict';

const manager = require('@carnesen/bitcoin-manager');

module.exports = {
  name: 'stop',
  description: 'stops the Bitcoin Core daemon (bitcoind)',
  parameters: [],
  execute: function* () {
    yield manager.stop();
    return 'stopped';
  }
};
