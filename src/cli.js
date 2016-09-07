#!/usr/bin/env node
'use strict';

const cli = require('@carnesen/cli');

require('./log');
const conf = require('./conf');
const launch = require('./launch');
const rpc = require('./rpc');
const { description } = require('../package.json');

cli({
  name: 'bitcoin',
  description,
  commands: [ conf, launch, rpc ]
});
