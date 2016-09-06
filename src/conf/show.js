'use strict';

const { readFile } = require('@carnesen/bitcoin-conf');

const { confFilePath } = require('../constants');

module.exports = {

  name: 'show',
  description: `Display the contents of ${ confFilePath }`,
  parameters: [],

  execute: function* () {

    let options = {};

    try {
      options = yield readFile(confFilePath);
    } catch (ex) {
      // The file might not exist
      if (ex.code !== 'ENOENT') {
        throw ex;
      }
    }

    return options;

  }

};
