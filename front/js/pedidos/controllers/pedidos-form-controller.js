(function () {
    'use strict';

    angular
        .module('app')
        .controller('PedidosFormController', PedidosFormController);

    PedidosFormController.inject = ['$routeParams', '$location', 'PedidoService', 'ClienteService'];

    function PedidosFormController($routeParams, $location, PedidoService, ClienteService) {
        var vm = this;

        vm.model = {};
        vm.message = '';
        vm.error = false;
        vm.titulo = 'Cadastro de pedido';

        vm.clientes = [];

        vm.salvar = salvar;

        inicializarForm();

        function inicializarForm() {
            ClienteService.getAll()
                .success(function (clientes) {
                    vm.clientes = clientes;
                })
                .catch(function (erro) {
                    console.log(erro);
                });

            if ($routeParams.id) {
                PedidoService.getById($routeParams.id)
                    .success(function (pedido) {
                        vm.model = pedido;
                    }).catch(function (erro) {
                        vm.mensagem = erro;
                        vm.error = true;
                    });
            }
        }

        function salvar() {
            PedidoService.save(vm.model)
                .success(function () {
                    vm.message = {
                        description: 'Pedido salvo com sucesso!',
                        class: 'success'
                    };
                    $location.path('/pedidos');
                })
                .catch(function (erro) {
                    console.log(erro);
                    vm.message = {
                        description: 'Problemas ao salvar o pedido!',
                        class: 'danger'
                    };
                });
        }

    }
})();