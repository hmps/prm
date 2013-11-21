'use strict';

angular.module('prmApp')
	.factory('statusService', function (angularFireCollection, fireRefService) {
		return {
			collection: function(cb) {
				return angularFireCollection(fireRefService.status(),cb);
			},
			find: function(statusId) {
				return fireRefService.status().child('/'+statusId);
			}
		}

});
