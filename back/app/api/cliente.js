var mongoose = require('mongoose');

module.exports = function(app) {

	var api = {};

	var model = mongoose.model('clientes');

	api.query = function(req, res) {
		var option = {
			sort : {
				nome : 1
			}
		};
		model.find({}, [], option).then(function(clientes) {
			res.json(clientes);
		}, function(error) {
			console.log(error);
			res.status(500).send(error);
		});
	};

	api.findById = function(req, res) {
		model.findById(req.params.id).then(function(cliente) {
			if (!cliente) {
				res.status(404).send("Cliente não existe");
				return;
			}	
			res.json(cliente);
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
		model.create(req.body).then(function(cliente) {
			res.status(201).json(cliente);
		}, function(error) {
			console.log(error);
			res.status(500).send(error);
		});
	};

	api.update = function(req, res) {
		model.findByIdAndUpdate(req.params.id, req.body).then(function(cliente) {
			res.json(cliente);
		}, function(error) {
			console.log(error);
			res.status(500).send(error);
		});
	};

	return api;
};