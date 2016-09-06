'use strict';

const launch = require('@carnesen/bitcoin-launch');

module.exports = {
  name: 'launch',
  description: 'launches the Bitcoin Core daemon (bitcoind)',
  parameters: [
    {
      name: 'version',
      type: 'string',
      description: 'Version of Bitcoin Core to launch',
      defaultValue: launch.constants.defaultVersion
    }
  ],
  execute: launch
};
