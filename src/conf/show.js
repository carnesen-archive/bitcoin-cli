'use strict';

const { readConfFile } = require('@carnesen/bitcoin-conf');

const { conf } = require('../constants');

module.exports = {

  name: 'show',
  description: `Display the contents of ${ conf }`,
  parameters: [],

  execute: function* () {

    let options = {};

    try {
      options = yield readConfFile({ conf });
    } catch (ex) {
      // If they've never called "set", the file doesn't exist
      if (ex.code !== 'ENOENT') {
        throw ex;
      }
    }

    return options;

  }

};
