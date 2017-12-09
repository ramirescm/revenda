(function () {
    'use strict';

    angular
        .module('app', ['ui.bootstrap'])
        .factory('ModalExcluir', ModalExcluir);

    ModalExcluir.inject = [];
    function ModalExcluir() {
        var ddo = {};

        ddo.restrict = "E";

        ddo.transclude = true;

        ddo.scope = {
            show: "=",
            title: "@",
            confirmAction: "&",
            cancelAction: "&"
        };

        ddo.templateUrl = "js/partials/modal.html";

        return ddo;
    }

})();