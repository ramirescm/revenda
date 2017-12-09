var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var _model = new Schema({

    tipoPessoa : {
        type: String,
		required: true
    },
    documento :{
        type: String,
        required: true
    },
	nome: {
		type: String,
		required: true
	},
    nomeFantasia: {
        type: String,
        required: true 
    },
    cep :{
        type: Number,
        required: false
    },
    endereco: {
        type: String,
        required: false
    },
    bairro: {
        type: String,
        required: false
    },
    cidade: {
        type: String,
        required: false
    },
    ramoAtividade: {
        type: Schema.Types.ObjectId,
        ref: 'ramosatividades'
    },
    ativo: {
        type: Boolean,
        required: true
    }
});

mongoose.model('contratantes', _model);