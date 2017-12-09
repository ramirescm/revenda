(function () {
    'use strict';

    angular.module('app').config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {

        $routeProvider.when('/produtos', {
            templateUrl: 'js/produtos/partials/produto/list.html',
            controller: 'ProdutosListController',
            controllerAs: 'vm'
        });
        $routeProvider.when('/produtos/new', {
            templateUrl: 'js/produtos/partials/produto/form.html',
            controller: 'ProdutosFormController',
            controllerAs: 'vm'
        });
        $routeProvider.when('/produtos/edit/:id', {
            templateUrl: 'js/produtos/partials/produto/form.html',
            controller: 'ProdutosFormController',
            controllerAs: 'vm'
        });
    }
})();