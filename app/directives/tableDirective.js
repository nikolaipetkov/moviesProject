myApp.directive('tableDirective', ['moviesProvider', function(moviesProvider){
	return {
		scope: {
			movies: '=',
			list: '='
		},
		restrict: 'E',
		templateUrl: 'directives/tableDirectiveTemplate.html',
		controller: function($scope, $element, $attrs){
			$scope.addSelected = function(index){
				console.log('adding movie to list')
				$scope.list.unshift({
					Title: $scope.movies[index].Title,
					Year: $scope.movies[index].Year,
					Poster: $scope.movies[index].Poster,
				})
			}
			//$scope.search = moviesProvider.searchMovie('weapon').$promise.then(function(data){
			//	console.log(data)
			//	$scope.movies = data.Search;
			//});
		},
	}
}])