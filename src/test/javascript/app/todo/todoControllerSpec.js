'use strict';

describe('Controller Tests', function() {
	beforeEach(module('myApp'));

	describe('TodoController', function() {
		var $scope;

		beforeEach(inject(function($rootScope, $controller) {
			$scope = $rootScope.$new();
			$controller('TodoCtrl', { $scope: $scope });
		}));

		it('should create $scope.greeting when calling sayHello', function() {
			expect($scope.greeting).toBeUndefined();
			$scope.sayHello();
			expect($scope.greeting).toEqual('Hello');
		});
	});
});
