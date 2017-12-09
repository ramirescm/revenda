(function () {
    'use strict';

    angular
        .module('app')
        .factory('RamoAtividadeService', RamoAtividadeService);

    RamoAtividadeService.$inject = ['$http', '$location', 'ConfigService'];

    function RamoAtividadeService($http, $location, ConfigService) {

        var urlBase = ConfigService.getBaseUrl() + 'ramosatividades';

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

        function _save(ramoAtividade) {
            if (ramoAtividade._id) {
                return $http.put(urlBase + '/' + ramoAtividade._id, ramoAtividade);
            } else {
                return $http.post(urlBase, ramoAtividade)
            }
        };

        function _getById(id) {
            return $http.get(urlBase + '/' + id);
        };

    }
})();