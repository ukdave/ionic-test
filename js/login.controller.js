'use strict';

angular.module('myApp')
	.controller('LoginCtrl', function($scope, $state, $ionicViewSwitcher, Auth) {
		$scope.authenticationError = false;
		$scope.creds = { username: null, password: null};

		console.log(Auth);

		$scope.login = function() {
			Auth.login({
				username: $scope.creds.username,
				password: $scope.creds.password
			}).then(function() {
				$scope.authenticationError = false;
				$ionicViewSwitcher.nextDirection('enter');
				$state.go('todo');
			}).catch(function() {
				$scope.authenticationError = true;
			});
		};
	});
