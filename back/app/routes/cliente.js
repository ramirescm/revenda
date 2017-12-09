module.exports = function(app) {
	
	var api = app.api.cliente;

	app.route('/api/clientes')
		.get(api.query)
		.post(api.insert);

	app.route('/api/clientes/:id')
		.get(api.findById)
		.delete(api.removeById)
		.put(api.update);
};