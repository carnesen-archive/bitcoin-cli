'use strict';

const manager = require('@carnesen/bitcoin-manager');

module.exports = {
  name: 'start',
  description: 'launches the Bitcoin Core daemon (bitcoind)',
  parameters: [
    {
      name: 'version',
      type: 'string',
      description: 'Version of Bitcoin Core to launch',
      defaultValue: manager.constants.defaultVersion
    }
  ],
  execute: manager.start
};
