var mongoose = require('mongoose');

module.exports = function(app) {

	var api = {};

	var model = mongoose.model('pedidos');

	api.query = function(req, res) {
		var option = {
			sort : {
				nome : 1
			}
		};
        
		model.find({}, [], option).populate('cliente', 'items').then(function(pedidos) {
			res.json(pedidos);
		}, function(error) {
			console.log(error);
			res.status(500).send(error);
		});
	};

	api.findById = function(req, res) {
		model.findById(req.params.id).then(function(pedido) {
			if (!pedido) {
				res.status(404).send("Pedido não existe");
				return;
			}	
			res.json(pedido);
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
		model.create(req.body).then(function(pedido) {
			res.status(201).json(pedido);
		}, function(error) {
			console.log(error);
			res.status(500).send(error);
		});
	};

	api.update = function(req, res) {
		model.findByIdAndUpdate(req.params.id, req.body).then(function(pedido) {
			res.json(pedido);
		}, function(error) {
			console.log(error);
			res.status(500).send(error);
		});
	};

    api.queryItems = function(req, res) {
		var option = {
			sort : {
				nome : 1
			}
		};
		model.find(req.params.id, [], option).populate('items').then(function (contratantes) {
			if (!pedido) {
				res.status(404).send("Pedido não existe");
				return;
			}	
			res.json(pedido);
		}, function(error) {
			console.log(error);
			res.status(500).send(error);
		});
	};

	return api;
};