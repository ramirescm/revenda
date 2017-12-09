var mongoose = require('mongoose');

module.exports = function(app) {

	var api = {};

	var model = mongoose.model('fornecedores');

	api.query = function(req, res) {
		var option = {
			sort : {
				nome : 1
			}
		};
		model.find({}, [], option).then(function(fornecedores) {
			res.json(fornecedores);
		}, function(error) {
			console.log(error);
			res.status(500).send(error);
		});
	};

	api.findById = function(req, res) {
		model.findById(req.params.id).then(function(fornecedor) {
			if (!fornecedor) {
				res.status(404).send("Fornecedor não existe");
				return;
			}	
			res.json(fornecedor);
		}, function(error) {
			console.log(error);
			res.status(500).send(error);
		});
	};

	api.removeById = function(req, res) {
		model.remove({'_id' : req.params.id}).then(function() {
			res.sendStatus(204);
		}, function(error) {
			console.log(error);
			res.status(500).send(error);
		});
	};

	api.insert = function(req, res) {
		model.create(req.body).then(function(fornecedor) {
			res.status(201).json(fornecedor);
		}, function(error) {
			console.log(error);
			res.status(500).send(error);
		});
	};

	api.update = function(req, res) {
		model.findByIdAndUpdate(req.params.id, req.body).then(function(fornecedor) {
			res.json(fornecedor);
		}, function(error) {
			console.log(error);
			res.status(500).send(error);
		});
	};

	return api;
};