'use strict';

angular.module('myApp')
	.config(function($stateProvider) {
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'templates/login.html',
				controller: 'LoginCtrl'
			});
	});
