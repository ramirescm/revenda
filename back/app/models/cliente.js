var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
	nome: {
		type: String,
		required: true
	},
	documento: {
		type: String,
		required: true
	},
	dataCadastro: {
		type: Date
	}
});

//http://stackoverflow.com/questions/7675549/how-do-i-update-a-property-with-the-current-date-in-a-mongoose-schema-on-every-s
_model.pre('save', function (next) {
	console.log('------------->>>>>> inserindo data....');
	this.dataCadastro = Date.now();
	next();
});

//https://github.com/Automattic/mongoose/issues/964
_model.pre('update', function (next) {
	console.log('------------->>>>>> update data....')
	this.dataCadastro = Date.now();
	next();
});

_model.pre('findOneAndUpdate', function () {
	console.log('------------->>>>>> findOneAndUpdate data....')
	this.dataCadastro = Date.now();
});

mongoose.model('clientes', _model);