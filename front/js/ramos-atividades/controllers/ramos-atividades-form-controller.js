(function () {
    'use strict';

    angular
        .module('app')
        .controller('RamosAtividadesFormController', RamosAtividadesFormController);

    RamosAtividadesFormController.inject = ['$routeParams', '$location', 'RamoAtividadeService'];

    function RamosAtividadesFormController($routeParams, $location, RamoAtividadeService) {
        var vm = this;

        vm.model = {};
        vm.message = '';
        vm.error = false;
        vm.titulo = 'Cadastro de ramo atividade';

        vm.salvar = salvar;

        inicializarForm();

        function inicializarForm() {
            if ($routeParams.id) {
                RamoAtividadeService.getById($routeParams.id)
                    .success(function (ramoatividade) {
                        vm.model = ramoatividade;
                    }).catch(function (erro) {
                        vm.mensagem = erro;
                        vm.error = true;
                    });
            }
        }

        function salvar() {
            RamoAtividadeService.save(vm.model)
                .success(function () {
                    vm.message = {
                        description: 'Ramo atividade salvo com sucesso!',
                        class: 'success'
                    };
                    $location.path('/ramosatividades');
                })
                .catch(function (erro) {
                    console.log(erro);
                    vm.message = {
                        description: 'Problemas ao salvar o ramo atividade!',
                        class: 'danger'
                    };
                });
        }

    }
})();