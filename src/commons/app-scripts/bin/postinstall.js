#!/usr/bin/env node

"use strict";

var fs = require("fs");
var exec = require('child_process').exec;
var moduleLocation = "src/commons";
var configLocation = `${moduleLocation}/app-scripts/config/`;
var runThisScript = `node src/commons/app-scripts/bin/postinstall.js`;

var catalog = {
  ionic_copy: {
    fileName: "copy.config.js",
    warn: function(command, location) {
      return `
        ##############################################################
        "${command}" configuration already present,
        to enable font copy from zanza00.app.commons it must be
        "${command}": "${location}"
        ##############################################################
      `
    }
  }
  // add here additional in case...
};

try {
  var packageJSONUrl = process.cwd() + "/package.json";
  var packageJSON = require(packageJSONUrl);
  packageJSON.config = packageJSON.config || {};

  if(!packageJSON.scripts.postinstall)
    packageJSON.scripts.postinstall = runThisScript;
  else if(packageJSON.scripts.postinstall.indexOf(runThisScript) === -1)
    packageJSON.scripts.postinstall = `${runThisScript} && ${packageJSON.scripts.postinstall}`;


  Object.keys(catalog).forEach(function(command) {
    var location = configLocation + catalog[command].fileName;
    if (!!packageJSON.config[command] && packageJSON.config[command] !== location)
      return console.warn(catalog[command].warn(command, location));
    packageJSON.config[command] = location;
  });

  console.log("• updating package.json...");
  fs.writeFileSync(packageJSONUrl, JSON.stringify(packageJSON, null, 2));
  console.log("• updated.");

  console.log("• installing dependencies...");
  var cmd = 'npm i --save ./src/commons';
  exec(cmd, function(error, stdout, stderr) {
    console.log(error || stdout || stderr);
  });

} catch (e) {
  console.error("package.json not found.", e);
  process.exit(1);
}
