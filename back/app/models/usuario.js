var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var _model = new Schema({

	email: {
		type: String,
		required: true
	},
	senha: {
		type: String,
		required: true
	}
});

mongoose.model('usuarios', _model);