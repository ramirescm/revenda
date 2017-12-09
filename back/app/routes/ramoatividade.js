module.exports = function(app) {
	
	var api = app.api.ramoatividade;

	app.route('/api/ramosatividades')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/api/ramosatividades/:id')
		.get(api.buscaPorId)
		.delete(api.removePorId)
		.put(api.atualiza);
};