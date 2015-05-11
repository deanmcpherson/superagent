var browserClient = require('./client');
var nodeClient = require('./node/index.js');
module.exports =  (global.window) ? browserClient : nodeClient; 