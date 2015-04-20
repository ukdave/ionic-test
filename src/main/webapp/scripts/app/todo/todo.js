'use strict';

angular.module('myApp')
	.config(function($stateProvider) {
		$stateProvider
			.state('todo', {
				url: '/todo',
				templateUrl: 'scripts/app/todo/todo.html',
				controller: 'TodoCtrl'
			})
			.state('todoItem', {
				url: '/todo/:itemId',
				templateUrl: 'scripts/app/todo/todo-item.html',
				controller: 'TodoItemCtrl'
			});
	});
