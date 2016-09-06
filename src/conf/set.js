'use strict';

const { readFile, writeFile } = require('@carnesen/bitcoin-conf');

const { confFilePath } = require('../constants');

module.exports = {

  name: 'set',

  description: `Sets a value in ${ confFilePath }`,

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
      options = yield readFile(confFilePath);
    } catch (ex) {
      if (ex.code !== 'ENOENT') {
        throw ex;
      }
    }
    options[key] = value;
    return yield writeFile(confFilePath, options);
  }

};

