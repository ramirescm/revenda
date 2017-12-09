module.exports = function(app) {
	
	var api = app.api.pedido;

	app.route('/api/pedidos')
		.get(api.query)
		.post(api.insert);

	app.route('/api/pedidos/:id')
		.get(api.findById)
		.delete(api.removeById)
		.put(api.update);

    app.route('/api/pedidos/:id/item')
		.get(api.queryItems)		
};