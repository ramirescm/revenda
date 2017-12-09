(function() {
    'use strict';

    angular
        .module('app')
        .factory('ConfigService', ConfigService);

    ConfigService.inject = ['$location'];

    function ConfigService($location) {
        var service = {
            getBaseUrl: _getBaseUrl
        };

        return service;

        ////////////////
        function _getBaseUrl() {
            if ($location.host() === 'localhost') {
                return 'http://' + $location.host() + ':3000/api/';
            }
            return 'http://' + $location.host().replace('www', 'api') + '/api/';
        }
    }
})();