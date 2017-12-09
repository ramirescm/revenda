var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var _model = new Schema({
    
	pedido: {
		type: Schema.Types.ObjectId,
        ref: 'pedidos',
        required: true
	},
    codigo: {
        type: String,
		required: true
    },
	nome: {
		type: String,
		required: true
	},
    quantidade: {
		type: Number,
		required: true
	},
    valor: {
		type: Number,
		required: true
	}
});

mongoose.model('pedidositems', _model);