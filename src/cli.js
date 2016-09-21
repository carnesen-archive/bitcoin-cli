#!/usr/bin/env node
'use strict';

const cli = require('@carnesen/cli');

const { description } = require('../package.json');
require('./log');
const conf = require('./conf');
const start = require('./start');
const stop = require('./stop');
const rpc = require('./rpc');
const version = require('./version');

cli({
  name: 'bitcoin',
  description,
  commands: [ conf, start, stop, version, rpc ]
});
