'use strict';

angular.module('prmApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute',
	'firebase'
])

.config(function ($routeProvider) {
	$routeProvider
		.when('/login', 					{ templateUrl: 'views/login.html', authRequired: false })

		.when('/', 							{ templateUrl: 'views/listPersons.html', authRequired: false })
		.when('/players/add', 				{ templateUrl: 'views/addPerson.html', authRequired: true })
		.when('/players/:personId', 		{ templateUrl: 'views/viewPerson.html', authRequired: true })
		.when('/players/:personId/edit', 	{ templateUrl: 'views/editPerson.html', authRequired: true })

		.otherwise({ 						redirectTo: '/' });
})

.run(['angularFireAuth', 'FBURL', '$rootScope',
	function(angularFireAuth, FBURL, $rootScope) {
		angularFireAuth.initialize(new Firebase(FBURL), {scope: $rootScope, name: 'auth', path: '/login'});
		$rootScope.FBURL = FBURL;
	}
])

// Firebase URL
.constant('FBURL', 'http://griffins-prm.firebaseio.com');;