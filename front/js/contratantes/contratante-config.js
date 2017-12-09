(function () {
    'use strict';

    angular.module('app').config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {

        $routeProvider.when('/contratantes', {
			templateUrl: 'js/contratantes/partials/contratante/list.html',
			controller: 'ContratantesListController',
			controllerAs: 'vm'
		});
		$routeProvider.when('/contratantes/new', {
			templateUrl: 'js/contratantes/partials/contratante/form.html',
			controller: 'ContratantesFormController',
			controllerAs: 'vm'
		});
		$routeProvider.when('/contratantes/edit/:id', {
			templateUrl: 'js/contratantes/partials/contratante/form.html',
			controller: 'ContratantesFormController',
			controllerAs: 'vm'
		});
    }
})();