#!/usr/bin/env node

var getUidByName = require("./index");

process.argv.slice(2).forEach(function (value) {
  var uid = getUidByName(value);
  process.stdout.write((typeof uid === "undefined" ? "" : uid.toString()) + "\n");
});
