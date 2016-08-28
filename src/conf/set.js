'use strict';

const { readConfFile, writeConfFile } = require('@carnesen/bitcoin-conf');

const { conf } = require('../constants');

module.exports = {

  name: 'set',

  description: `Sets a value in ${ conf }`,

  parameters: [
    {
      name: 'key',
      type: 'string',
      description: 'the name of the parameter to set',
      positional: true
    },
    {
      name: 'value',
      type: 'string',
      description: 'the value of the parameter to set',
      positional: true
    }
  ],

  execute: function*({ key, value }) {
    let options = {};
    try {
      options = yield readConfFile({ conf });
    } catch (ex) {
      if (ex.code !== 'ENOENT') {
        throw ex;
      }
    }
    options[key] = value;
    yield writeConfFile({ conf, options });
  }

};

