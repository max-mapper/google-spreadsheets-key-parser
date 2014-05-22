#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var parser = require('./index');
var input = process.argv[2];

function help() {
  console.log(pkg.description);
  console.log('');
  console.log('Usage');
  console.log('  $ google-spreadsheets-key-parser <url>');
}

if (!input || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  help();
  return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

console.log(JSON.stringify(parser(input)));
