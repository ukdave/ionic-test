'use strict';

angular.module('myApp')
	.factory('Auth', function Auth($q) {
		return {
			login: function(credentials) {
				var deferred = $q.defer();

				if (credentials.username == 'user' && credentials.password == 'pass') {
					console.log('Login successfull');
					deferred.resolve({});
				} else {
					console.log('Login failed');
					deferred.reject({});
				}

				return deferred.promise;
			},

			logout: function () {
				console.log('Logged out');
			}
		};
	});
