'use strict';

angular.module('prmApp')
.controller('PersonCtrl', function ($scope, $rootScope, $routeParams, $route, angularFire, personService, categoryService, statusService, positionService) {

	$scope.listOrder = 'name';
	$scope.persons = personService.collection();
	$scope.categories = categoryService.collection();
	$scope.statuses = statusService.collection();
	$scope.positions = positionService.collection();

	//-----------------------------------------------------------------------//
	// Search filters should never be set to null but to empty strings.
	//-----------------------------------------------------------------------//
	$scope.$watch('search.position', function() {
		if(null===this.last) {
			$scope.search.position = '';
		}
	});

	$scope.addNew = function() {
		personService.create($scope.person);
	};

	$scope.getPlayer = function(id) {
		if( undefined === id && !!$routeParams.personId) {
			id = $routeParams.personId;
		}

		if(!!id) {
			angularFire(personService.find(id), $scope, 'person').then(function() {
				if( !$scope.person.image ) {
					$scope.person.image = "http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg";
				}
				$scope.person.id = id;
			});
		}
	};

	$scope.logThat = function() {
		if( ! $scope.person.log ) {
			$scope.person.log = []
		}

		$scope.person.log.push({
			'date': Date.now(),
			'data': $scope.tempLog
		});

		$scope.person['updated_at'] = Date.now();
	}

	$scope.updateSearch = function(term) {
		$scope.search.category = term;
	}
});