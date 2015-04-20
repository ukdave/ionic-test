'use strict';

angular.module('myApp')
	.config(function($stateProvider) {
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'scripts/app/login/login.html',
				controller: 'LoginCtrl'
			});
	});
