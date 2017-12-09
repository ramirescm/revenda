var http = require('http');
var app = require('./config/express');
var database = require('./config/database');

database('mongodb://localhost/condominio');

http.createServer(app).listen(3000, function() {
	console.log('Servidor iniciado na porta 3000');
});
