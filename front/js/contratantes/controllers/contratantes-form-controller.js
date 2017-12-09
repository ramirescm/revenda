(function () {
    'use strict';

    angular
        .module('app')
        .controller('ContratantesFormController', ContratantesFormController);

    ContratantesFormController.inject = ['$routeParams', '$location', 'ContratanteService', 'RamoAtividadeService'];

    function ContratantesFormController($routeParams, $location, ContratanteService, RamoAtividadeService) {
        var vm = this;

        vm.model = {};
        vm.message = '';
        vm.error = false;
        vm.titulo = 'Cadastro de contratante';
        vm.ramosatividades = [];

        vm.salvar = salvar;

        inicializarForm();

        function inicializarForm() {

             RamoAtividadeService.getAll()
                .success(function (ramosatividades) {
                    vm.ramosatividades = ramosatividades;
                })
                .catch(function (erro) {
                    console.log(erro);
                });

            if ($routeParams.id) {
                ContratanteService.getById($routeParams.id)
                    .success(function (contratante) {
                        console.log('contratante');
                        console.log(contratante);
                        vm.model = contratante;
                    }).catch(function (erro) {
                        vm.mensagem = erro;
                        vm.error = true;
                    });
            }
        }

        function salvar() {
            ContratanteService.save(vm.model)
                .success(function () {
                    vm.message = {
                        description: 'Contratante salvo com sucesso!',
                        class: 'success'
                    };
                    $location.path('/contratantes');
                })
                .catch(function (erro) {
                    console.log(erro);
                    vm.message = {
                        description: 'Problemas ao salvar o contratante!',
                        class: 'danger'
                    };
                });
        }

    }
})();