'use strict';

angular.module('prmApp')
	.factory('fireRefService', function (FBURL, Firebase) {

		return {
			user: function() {
				return new Firebase(FBURL+'/users');
			},
			person: function() {
				return new Firebase(FBURL+'/persons');
			},
			category: function() {
				return new Firebase(FBURL+'/categories');
			},
			status: function() {
				return new Firebase(FBURL+'/status');
			},
			position: function() {
				return new Firebase(FBURL+'/positions');
			}
		}

});