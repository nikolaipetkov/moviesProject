myApp.directive('tableDirective', ['moviesProvider', function(moviesProvider){
	return {
		scope: {
			movies: '=',
			list: '=',
			showModal: '&',
			movieData: '=',
		},
		restrict: 'E',
		templateUrl: 'directives/tableDirectiveTemplate.html',
		controller: function($scope, $element, $attrs){
			$scope.getMovie = function(whatMovie){
				moviesProvider.getMovie(whatMovie).$promise.then(function(data){
					$scope.movieData = data;
				});
			}

			$scope.addSelected = function(index){
				if(!$scope.contains($scope.list, $scope.movies[index].Title)){
					$scope.list.unshift({
						Title: $scope.movies[index].Title,
						Year: $scope.movies[index].Year,
						Poster: $scope.movies[index].Poster,
					})
				}
			}

			$scope.contains = function(array, obj) {
				var i = array.length;
				while (i--) {
					if (array[i].Title === obj) {
				    	return true;
				   	}
				}
				return false;
			}
		},
	}
}])

