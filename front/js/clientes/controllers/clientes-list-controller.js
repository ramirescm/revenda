(function () {
    'use strict';

    angular
        .module('app')
        .controller('ClientesListController', ClientesListController);

    ClientesListController.inject = ['$http', '$location', 'ClienteService'];

    function ClientesListController($http, $location, ClienteService) {
        var vm = this;
        vm.titulo = 'Clientes';
        vm.clientes = [];
        vm.remover = remover;

        inicializar();

        function inicializar() {
            ClienteService.getAll()
                .success(function (clientes) {
                    vm.clientes = clientes;
                })
                .catch(function (erro) {
                    console.log(erro);
                });
        }

        function remover(cliente) {
            if (!confirm('Deseja realmente excluir o registro?'))
                return;

            ClienteService.delete(cliente._id)
                .success(function () {
                    inicializar();
                    $location.path('/clientes');
                })
                .catch(function (erro) {
                    console.log(erro);
                });
        }

    }
})();