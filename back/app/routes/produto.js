module.exports = function(app) {
	
	var api = app.api.produto;

	app.route('/api/produtos')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/api/produtos/:id')
		.get(api.buscaPorId)
		.delete(api.removePorId)
		.put(api.atualiza);
};