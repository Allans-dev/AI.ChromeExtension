var indico = require('indico.io');
indico.apiKey =  'f021a8f6bb80c6fcda683d9db16ade3d';

var response = function(res) { console.log(res); }
var logError = function(err) { console.log(err); }

// single example
indico.keywords("Some call it the sunshine state", {version: 2})
  .then(response)
  .catch(logError);

// batch example
var batchInput = [
    "Some call it the sunshine state",
    "Some call it the sunshine state"
];
indico.keywords(batchInput, {version: 2})
  .then(response)
  .catch(logError);