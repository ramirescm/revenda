(function () {
    'use strict';

    angular
        .module('app')
        .controller('ProdutosListController', ProdutosListController);

    ProdutosListController.inject = ['$http', '$location', 'ProdutoService'];

    function ProdutosListController($http, $location, ProdutoService) {
        var vm = this;
        vm.titulo = 'Produtos';
        vm.produtos = [];
        vm.remover = remover;

        inicializar();

        function inicializar() {
            ProdutoService.getAll()
                .success(function (produtos) {
                    vm.produtos = produtos;
                })
                .catch(function (erro) {
                    console.log(erro);
                });
        }

        function remover(produto) {
            if (!confirm('Deseja realmente excluir o registro?'))
                return;

            ProdutoService.delete(produto._id)
                .success(function () {
                    inicializar();
                    $location.path('/produtos');
                })
                .catch(function (erro) {
                    console.log(erro);
                });
        }

    }
})();