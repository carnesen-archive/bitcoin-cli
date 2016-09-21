'use strict';

const rpc = require('bitcoin-rpc');

const commands = rpc.methods.map(method => {

  function* execute(argObject) {
    const client = rpc.createCookieClient()
  }

  return {
    name: method.name,
    description: method.description,
    parameters: method.parameters.map(parameter => Object.assign(parameter))
  }
});

module.exports = {
  name: 'rpc',
  description: 'Bitcoin Core remote procedure calls',
  commands: [ ]
};
