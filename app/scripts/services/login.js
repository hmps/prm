'use strict';

angular.module('prmApp')
.factory('loginService', function ( angularFireAuth, $location, $rootScope ) {

	return {
		login: function(email, pass, redirect, callback) {
			var p = angularFireAuth.login('password', {
				email: email,
				password: pass,
				rememberMe: true
			});
			p.then(function(user) {
				if( redirect ) {
					$location.path(redirect);
				}
				callback && callback(null, user);
			}, callback);
		},

		logout: function(redirectPath) {
			angularFireAuth.logout();
			$location.path(redirectPath);
		}
	// ,	createAccount: function(name, email, pass, callback) {
	// 		angularFireAuth._authClient.createUser(email, pass, function(err, user) {
	// 			if(callback) {
	// 				callback(err, user);
	// 				$rootScope.$apply();
	// 			}
	// 		});
	// 	},
	// 	createProfile: profileCreator
	// };
	};

});