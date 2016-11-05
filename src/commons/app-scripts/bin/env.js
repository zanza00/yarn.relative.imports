#!/usr/bin/env node

'use strict';

var fs = require('fs');

//TODO: this doesn't work properly, use env variables or npm configs instead of argv
var argv = process.argv;

var dest = 'src/app/env.ts';
var env = 'local';
if (argv.indexOf('--svil') > -1) {
  env = 'svil';
} else if (argv.indexOf('--coll') > -1) {
  env = 'coll';
} else if (argv.indexOf('--cert') > -1) {
  env = 'cert';
} else if (argv.indexOf('--prod') > -1) {
  env = 'prod';
}

fs.writeFileSync(dest, `export default '${env}';`);
