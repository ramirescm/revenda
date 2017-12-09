(function () {
    'use strict';

    angular
        .module('app')
        .factory('ContratanteService', ContratanteService);

    ContratanteService.$inject = ['$http', '$location', 'ConfigService'];

    function ContratanteService($http, $location, ConfigService) {

        var urlBase = ConfigService.getBaseUrl() + 'contratantes';

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

        function _save(contratante) {
            if (contratante._id) {
                return $http.put(urlBase + '/' + contratante._id, contratante);
            } else {
                return $http.post(urlBase, contratante)
            }
        };

        function _getById(id) {
            return $http.get(urlBase + '/' + id);
        };

    }
})();