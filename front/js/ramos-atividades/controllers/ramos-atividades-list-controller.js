(function () {
    'use strict';

    angular
        .module('app')
        .controller('RamosAtividadesListController', RamosAtividadesListController);

    RamosAtividadesListController.inject = ['$http', '$location', 'RamoAtividadeService'];

    function RamosAtividadesListController($http, $location, RamoAtividadeService) {
        var vm = this;
        vm.titulo = 'Ramos atividades';
        vm.ramosatividades = [];
        vm.remover = remover;

        vm.show = false;
        vm.clicouBotaoSim = clicouBotaoSim;
        vm.clicouBotaoNao = clicouBotaoNao;


        inicializar();

        function inicializar() {
            RamoAtividadeService.getAll()
                .success(function (ramosatividades) {
                    vm.ramosatividades = ramosatividades;
                })
                .catch(function (erro) {
                    console.log(erro);
                });
        }

        function remover(ramoAtividade) {
            if (!confirm('Deseja realmente excluir o registro?'))
                return;

            RamoAtividadeService.delete(ramoAtividade._id)
                .success(function () {
                    inicializar();
                    $location.path('/ramosatividades');
                })
                .catch(function (erro) {
                    console.log(erro);
                });
        }

        function showModal() {
            vm.show = true;
        }

        function clicouBotaoSim() {
            console.log("SIM");
        }

        function clicouBotaoNao() {
            console.log("NAO");
        }

    }
})();