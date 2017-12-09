module.exports = function(app) {
	
	var api = app.api.contratante;

	app.route('/api/contratantes')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/api/contratantes/:id')
		.get(api.buscaPorId)
		.delete(api.excluirPorId)
		.put(api.atualiza);
};