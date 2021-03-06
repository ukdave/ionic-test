'use strict';

angular.module('myApp')
	.controller('TodoCtrl', function($scope, $state, $ionicViewSwitcher, Todo, Auth) {
		$scope.todo = Todo.all();

		$scope.logout = function() {
			Auth.logout();
			$ionicViewSwitcher.nextDirection('exit');
			$state.go('login');
		};

		$scope.sayHello = function() {
			$scope.greeting = 'Hello';
		};
	})


	.controller('TodoItemCtrl', function($scope, $stateParams, Todo) {
		$scope.item = Todo.get($stateParams.itemId);
	});
