var mongoose = require('mongoose');

module.exports = function(app) {

	var api = {};

	var model = mongoose.model('contratantes');

	api.lista = function(req, res) {

		model.find().populate('ramoAtividade').then(function (contratantes) {
			res.json(contratantes);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.buscaPorId = function(req, res) {

		model.findById(req.params.id)
		.then(function(contratante) {
			if (!contratante) throw new Error('Registro não encontrado!');
			res.json(contratante);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.adiciona = function(req, res) {

		model.create(req.body)
		.then(function(contratante) {
			res.json(contratante);
		}, function(error) {
			console.log('Erro ao salvar o registro, tente novamente!');
			console.log(error);
			res.sendStatus(500);
		});
	};

	api.atualiza = function(req, res) {

		model.findByIdAndUpdate(req.params.id, req.body)
		.then(function(contratante) {
			res.json(contratante);
		}, function(error) {
			console.log(error);
			res.sendStatus(500);
		})
	};

	api.excluirPorId = function(req, res) {
		model.remove({'_id' : req.params.id}).then(function() {
			res.sendStatus(204);
		}, function(error) {
			console.log(error);
			res.status(500).send(error);
		});
	};

	return api;
};