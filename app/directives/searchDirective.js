myApp.directive('searchDirective', ['moviesProvider', function(moviesProvider){

	return {
		scope: {
			movies: '='
		},
		restrict: 'E',
		templateUrl: 'directives/searchDirectiveTemplate.html',
		controller: function($scope, $element, $attrs){
			$scope.searchItem = '';
			$scope.search = function(whatMovie){
				if(whatMovie){
					moviesProvider.searchMovie(whatMovie).$promise.then(function(data){
						$scope.movies = data.Search;
					})
				}
			};
		},
		link: function(scope, element, attrs){

		}
	}
}])