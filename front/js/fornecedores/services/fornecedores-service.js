(function () {
    'use strict';

    angular
        .module('app')
        .factory('FornecedoresService', FornecedoresService);

    FornecedoresService.$inject = ['$http', 'ConfigService'];

    function FornecedoresService($http, ConfigService) {

        var url = ConfigService.getBaseUrl() + 'fornecedores';

        var service = {
            getAll: _getAll,
            save: _save,
            getOne: _getOne,
            delete: _delete
        };

        return service;

        ////////////////
        function _getAll() {
            return $http({
                method: 'GET',
                url: url
            });
        }

        function _save(fornecedor) {
            if (fornecedor._id) {
                // Editar
                return $http.put(url + '/' + fornecedor._id, fornecedor);
            } else {
                // Inserir
                return $http.post(url, fornecedor);
            }
        }

        function _getOne(id) {
            return $http.get(url + '/' + id);
        }

        function _delete(id) {
            return $http({
                method: 'DELETE',
                url: url + '/' + id
            });
        }
    }
})();