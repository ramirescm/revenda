module.exports = function(app) {
	
	var api = app.api.fornecedor;

	app.route('/api/fornecedores')
		.get(api.query)
		.post(api.insert);

	app.route('/api/fornecedores/:id')
		.get(api.findById)
		.delete(api.removeById)
		.put(api.update);
};