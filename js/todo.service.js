'use strict';

angular.module('myApp')
	.factory('Todo', function() {
		// Might use a resource here that returns a JSON array

		// Some fake testing data
		var todo = [{
			id: 0,
			title: 'Thing 1',
			description: 'This is the first thing'
		}, {
			id: 1,
			title: 'Thing 2',
			description: 'This is the second thing'
		}, {
			id: 2,
			title: 'Thing 3',
			description: 'This is the third thing'
		}, {
			id: 3,
			title: 'Thing 4',
			description: 'This is the fourth thing'
		}, {
			id: 4,
			title: 'Thing 5',
			description: 'This is the fifth thing'
		}];

		return {
			all: function() {
				return todo;
			},
			remove: function(itme) {
				todo.splice(chats.indexOf(item), 1);
			},
			get: function(itemId) {
				for (var i = 0; i < todo.length; i++) {
					if (todo[i].id === parseInt(itemId)) {
						return todo[i];
					}
				}
				return null;
			}
		};
	});
