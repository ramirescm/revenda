(function () {
    'use strict';

    angular
        .module('app')
        .factory('ProdutoService', ProdutoService);

    ProdutoService.$inject = ['$http', '$location', 'ConfigService'];

    function ProdutoService($http, $location, ConfigService) {

        var urlBase = ConfigService.getBaseUrl() + 'produtos';

        var service = {
            getAll: _getAll,
            getById: _getById,
            save: _save,
            delete: _delete
        };

        return service;

        ////////////////

        function _getAll() {
            return $http.get(urlBase);
        };

        function _delete(id) {
            return $http.delete(urlBase + '/' + id);
        };

        function _save(produto) {
            if (produto._id) {
                return $http.put(urlBase + '/' + produto._id, produto);
            } else {
                return $http.post(urlBase, produto)
            }
        };

        function _getById(id) {
            return $http.get(urlBase + '/' + id);
        };

    }
})();