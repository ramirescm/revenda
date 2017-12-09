(function () {
    'use strict';

    angular.module('app').config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {

        $routeProvider.when('/clientes', {
            templateUrl: 'js/clientes/partials/cliente/list.html',
            controller: 'ClientesListController',
            controllerAs: 'vm'
        });
        $routeProvider.when('/clientes/new', {
            templateUrl: 'js/clientes/partials/cliente/form.html',
            controller: 'ClientesFormController',
            controllerAs: 'vm'
        });
        $routeProvider.when('/clientes/edit/:id', {
            templateUrl: 'js/clientes/partials/cliente/form.html',
            controller: 'ClientesFormController',
            controllerAs: 'vm'
        });
    }
})();