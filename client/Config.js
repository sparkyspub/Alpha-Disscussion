var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: '/main.ejs',
		controller: 'userController'
	})
	.when('/dashboard', {
		templateUrl: '/dashboard.ejs',
		controller: 'dashboardController'
	})
	.when('/topic/:id', {
		templateUrl: '/topic.ejs',
		controller: 'topicController'
	})
	.when('/user/:id', {
		templateUrl: '/user.ejs',
		controller: 'userController'
	})
	.otherwise({
		redirectTo: '/'
	})
})
