'use strict';

angular.module('prmApp')
	.factory('personService', function (angularFireCollection, fireRefService) {

		return {
			collection: function(cb) {
				return angularFireCollection(fireRefService.person(),cb);
			},
			find: function(personId) {
				return fireRefService.person().child('/'+personId);
			},
			create: function(person, callback) {
				return fireRefService.person().push({
					'name':       person.name,
					'team':       person.team,
					'position':   person.position,
					'category':   [person.category],
					'status':     person.status,
					'recruiter':  person.recruiter,
					'log': 	[
						{
							'date': Date.now(),
							'data': person.name + ' registrerades i systemet'
						}
					],
					'created_at': Date.now(),
					'updated_at': Date.now(),
					'deleted_at': ''
				}, callback).name();
			},
			removePerson: function(personId) {
				// SOFT DELETE
				// var person = fireRefService.person().child('/'+personId)
				// person.remove();
			}
		}

});
