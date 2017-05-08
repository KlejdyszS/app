angular.module('zamowienia', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/zamowienia',{
			controller: 'ListController',
			templateUrl: 'views/list.html'
			});
		$locationProvider.html5Mode(true);
	});