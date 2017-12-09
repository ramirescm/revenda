(function () {
    'use strict';

    angular.module('app').config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {

        $routeProvider.when('/fornecedores', {
            templateUrl: 'js/fornecedores/partials/fornecedor/list.html',
            controller: 'FornecedoresListController',
            controllerAs: 'vm'
        });
        $routeProvider.when('/fornecedores/new', {
            templateUrl: 'js/fornecedores/partials/fornecedor/form.html',
            controller: 'FornecedoresFormController',
            controllerAs: 'vm'
        });
        $routeProvider.when('/fornecedores/edit/:id', {
            templateUrl: 'js/fornecedores/partials/fornecedor/form.html',
            controller: 'FornecedoresFormController',
            controllerAs: 'vm'
        });

    }
})();