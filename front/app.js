(function () {
	'use strict';
	console.log('sddsds');
	angular
		.module('app', [
			'ngRoute',
			'ui.checkbox',
			'ui.bootstrap'
		]);
	angular
		.module('app').config(config);

	function config($routeProvider) {
		$routeProvider.otherwise('/');
	}

	
})();