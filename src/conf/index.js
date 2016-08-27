'use strict';

const { configFile } = require('../constants');

const set = require('./set');
const show = require('./show');

module.exports = {
  name: 'conf',
  description: `operations for manipulating ${ configFile }`,
  commands: [ set, show ]
};
