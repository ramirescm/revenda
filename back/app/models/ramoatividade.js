var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var _model = new Schema({

	nome: {
		type: String,
		required: true
	},
	descricao: {
		type: String,
		required: true
	}
});

mongoose.model('ramosatividades', _model);