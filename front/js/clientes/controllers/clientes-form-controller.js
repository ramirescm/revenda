(function () {
    'use strict';

    angular
        .module('app')
        .controller('ClientesFormController', ClientesFormController);

    ClientesFormController.inject = ['$routeParams', '$location', 'ClienteService'];

    function ClientesFormController($routeParams, $location, ClienteService) {
        var vm = this;

        vm.model = {};
        vm.message = '';
        vm.error = false;
        vm.titulo = 'Cadastro de cliente';

        vm.salvar = salvar;

        inicializarForm();

        function inicializarForm() {
            if ($routeParams.id) {
                ClienteService.getById($routeParams.id)
                    .success(function (cliente) {
                        vm.model = cliente;
                    }).catch(function (erro) {
                        vm.mensagem = erro;
                        vm.error = true;
                    });
            }
        }

        function salvar() {
            ClienteService.save(vm.model)
                .success(function () {
                    vm.message = {
                        description: 'Cliente salvo com sucesso!',
                        class: 'success'
                    };
                    $location.path('/clientes');
                })
                .catch(function (erro) {
                    console.log(erro);
                    vm.message = {
                        description: 'Problemas ao salvar o cliente!',
                        class: 'danger'
                    };
                });
        }

    }
})();