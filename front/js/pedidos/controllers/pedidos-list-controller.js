(function () {
    'use strict';

    angular
        .module('app')
        .controller('PedidosListController', PedidosListController);

    PedidosListController.inject = ['$http', '$location', 'PedidoService'];

    function PedidosListController($http, $location, PedidoService) {
        var vm = this;
        vm.titulo = 'Pedidos';
        vm.pedidos = [];
        vm.remover = remover;

        inicializar();

        function inicializar() {
            PedidoService.getAll()
                .success(function (pedidos) {
                    vm.pedidos = pedidos;
                })
                .catch(function (erro) {
                    console.log(erro);
                });
        }

        function remover(pedido) {
            if (!confirm('Deseja realmente excluir o registro?'))
                return;

            PedidoService.delete(pedido._id)
                .success(function () {
                    inicializar();
                    $location.path('/pedidos');
                })
                .catch(function (erro) {
                    console.log(erro);
                });
        }

    }
})();