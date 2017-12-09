(function () {
    'use strict';

    angular
        .module('app')
        .factory('ClienteService', ClienteService);

    ClienteService.$inject = ['$http', '$location', 'ConfigService'];

    function ClienteService($http, $location, ConfigService) {

        var urlBase = ConfigService.getBaseUrl() + 'clientes';

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

        function _save(cliente) {
            if (cliente._id) {
                return $http.put(urlBase + '/' + cliente._id, cliente);
            } else {
                return $http.post(urlBase, cliente)
            }
        };

        function _getById(id) {
            return $http.get(urlBase + '/' + id);
        };

    }
})();