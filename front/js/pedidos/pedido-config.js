(function () {
    'use strict';

    angular.module('app').config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {

        $routeProvider.when('/pedidos', {
            templateUrl: 'js/pedidos/partials/pedido/list.html',
            controller: 'PedidosListController',
            controllerAs: 'vm'
        });
        $routeProvider.when('/pedidos/new', {
            templateUrl: 'js/pedidos/partials/pedido/form.html',
            controller: 'PedidosFormController',
            controllerAs: 'vm'
        });
        $routeProvider.when('/pedidos/edit/:id', {
            templateUrl: 'js/pedidos/partials/pedido/form.html',
            controller: 'PedidosFormController',
            controllerAs: 'vm'
        });
    }
})();