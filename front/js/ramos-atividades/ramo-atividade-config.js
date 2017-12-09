(function () {
	'use strict';

	angular.module('app').config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider) {

		$routeProvider.when('/ramosatividades', {
			templateUrl: 'js/ramos-atividades/partials/ramo-atividade/list.html',
			controller: 'RamosAtividadesListController',
			controllerAs: 'vm'
		});
		$routeProvider.when('/ramosatividades/new', {
			templateUrl: 'js/ramos-atividades/partials/ramo-atividade/form.html',
			controller: 'RamosAtividadesFormController',
			controllerAs: 'vm'
		});
		$routeProvider.when('/ramosatividades/edit/:id', {
			templateUrl: 'js/ramos-atividades/partials/ramo-atividade/form.html',
			controller: 'RamosAtividadesFormController',
			controllerAs: 'vm'
		});
	}
})();