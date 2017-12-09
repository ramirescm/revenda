var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
	documento: {
		type: String,
		required: true
	},
	nome: {
		type: String,
		required: true
	},
	telefone: {
		type: String,
	},
	email: {
		type: String,
	}
});

mongoose.model('fornecedores', _model);