angular.module('zamowienia', ['ngRoute'])
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider
		.when('/zamowienia',{
			controller: 'ListController',
			tempateUrl: 'vievs/list.html'
			});
		$locationProvider.html5mode(true);
	});