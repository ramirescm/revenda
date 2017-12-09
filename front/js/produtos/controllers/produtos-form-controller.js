(function () {
    'use strict';

    angular
        .module('app')
        .controller('ProdutosFormController', ProdutosFormController);

    ProdutosFormController.inject = ['$routeParams', '$location', 'ProdutoService'];

    function ProdutosFormController($routeParams, $location, ProdutoService) {
        var vm = this;

        vm.model = {};
        vm.message = '';
        vm.error = false;
        vm.titulo = 'Cadastro de produto';

        vm.salvar = salvar;

        inicializarForm();

        function inicializarForm() {
            if ($routeParams.id) {
                ProdutoService.getById($routeParams.id)
                    .success(function (produto) {
                        vm.model = produto;
                    }).catch(function (erro) {
                        vm.mensagem = erro;
                        vm.error = true;
                    });
            }
        }

        function salvar() {
            ProdutoService.save(vm.model)
                .success(function () {
                    vm.message = {
                        description: 'Produto salvo com sucesso!',
                        class: 'success'
                    };
                    $location.path('/produtos');
                })
                .catch(function (erro) {
                    console.log(erro);
                    vm.message = {
                        description: 'Problemas ao salvar o produto!',
                        class: 'danger'
                    };
                });
        }

    }
})();