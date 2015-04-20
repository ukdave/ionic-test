'use strict';

angular.module('myApp')
	.config(function($stateProvider) {
		$stateProvider

			// setup an abstract state for the tabs directive
			.state('tab', {
				url: '/tab',
				abstract: true,
				templateUrl: 'tabs.html'
			})

			// Each tab has its own nav history stack:
			.state('tab.dash', {
				url: '/dash',
				views: {
					'tab-dash': {
						templateUrl: 'scripts/app/tabs/tab-dash.html',
						controller: 'DashCtrl'
					}
				}
			})
			.state('tab.chats', {
				url: '/chats',
				views: {
					'tab-chats': {
						templateUrl: 'scripts/app/tabs/tab-chats.html',
						controller: 'ChatsCtrl'
					}
				}
			})
			.state('tab.chat-detail', {
				url: '/chats/:chatId',
				views: {
					'tab-chats': {
						templateUrl: 'scripts/app/tabs/chat-detail.html',
						controller: 'ChatDetailCtrl'
					}
				}
			})
			.state('tab.account', {
				url: '/account',
				views: {
					'tab-account': {
						templateUrl: 'scripts/app/tabs/tab-account.html',
						controller: 'AccountCtrl'
					}
				}
			});
	});
