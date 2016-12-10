var connect = require('connect');
var serveStatic = require('serve-static');
var fs = require('fs');

var port = 7878;

connect().use(serveStatic(__dirname+'/')).listen(port);

console.log('Server running on port ' + port);