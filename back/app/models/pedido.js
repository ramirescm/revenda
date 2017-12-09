var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var _model = new Schema({

    codigo: {
        type: String,
		required: true
    },
	dataEmissao: {
		type: String,
		required: true
	},
	cliente: {
		type: Schema.Types.ObjectId,
        ref: 'clientes',
        required: true
	},
    items : [{ 
        type: Schema.Types.ObjectId, 
        ref: 'pedidositems' 
    }]
});

mongoose.model('pedidos', _model);