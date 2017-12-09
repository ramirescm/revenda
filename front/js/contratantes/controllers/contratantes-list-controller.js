(function () {
    'use strict';

    angular
        .module('app')
        .controller('ContratantesListController', ContratantesListController);

    ContratantesListController.inject = ['$http', '$location', 'ContratanteService'];

    function ContratantesListController($http, $location, ContratanteService) {
        var vm = this;
        vm.titulo = 'Contratante';
        vm.contratantes = [];
        vm.remover = remover;

        inicializar();

        function inicializar() {
            ContratanteService.getAll()
                .success(function (contratantes) {
                    vm.contratantes = contratantes;
                })
                .catch(function (erro) {
                    console.log(erro);
                });
        }

        function remover(contratante) {
            if (!confirm('Deseja realmente excluir o registro?'))
                return;

            ContratanteService.delete(contratante._id)
                .success(function () {
                    inicializar();
                    $location.path('/contratantes');
                })
                .catch(function (erro) {
                    console.log(erro);
                });
        }

    }
})();