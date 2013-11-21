'use strict';

angular.module('prmApp')
	.factory('positionService', function (angularFireCollection, fireRefService) {

		return {
			collection: function(cb) {
				return angularFireCollection(fireRefService.position(),cb);
			},
			find: function(positionId) {
				return fireRefService.position().child('/'+positionId);
			},
		}

});
