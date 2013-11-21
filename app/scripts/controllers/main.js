'use strict';

angular.module('prmApp')
.controller('MainCtrl', function ($scope, $route, breadcrumbs, loginService) {
	$scope.breadcrumbs = breadcrumbs;

	$scope.logout = function() {
		loginService.logout('/login');
	}
});
