'use strict';

angular.module('prmApp')
	.factory('categoryService', function (angularFireCollection, fireRefService) {
		return {
			collection: function(cb) {
				return angularFireCollection(fireRefService.category(),cb);
			},
			find: function(categoryId) {
				return fireRefService.category().child('/'+categoryId);
			}
		}

});
