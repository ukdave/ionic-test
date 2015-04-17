'use strict';

angular.module('myApp')
	.config(function($stateProvider) {
		$stateProvider
			.state('todo', {
				url: '/todo',
				templateUrl: 'templates/todo.html',
				controller: 'TodoCtrl'
			})
			.state('todoItem', {
				url: '/todo/:itemId',
				templateUrl: 'templates/todo-item.html',
				controller: 'TodoItemCtrl'
			});
	});
