angular.module('moviesModule', [])
.controller('MoviesController', function($scope, $rootScope, $state){

//SEARCH ITEMS GO HERE
	$scope.movieList = [];

//ADDED MOVIES GO HERE
	$scope.myMovies = [];

//Modal uses controller functions (reason: code structure)
	$scope.addFromModal = function(){
		if(!$scope.contains($scope.myMovies, $scope.movieData.Title)){
			$scope.myMovies.unshift({
				Title: $scope.movieData.Title,
				Year: $scope.movieData.Year,
				Poster: $scope.movieData.Poster
			})
		}
	}

//Helper function checking if element exist in given array (used in Add)
	$scope.contains = function(array, obj) {
		var i = array.length;
		while (i--) {
			if (array[i].Title === obj) {
		    	return true;
		   	}
		}
		return false;
	}

//MODAL STUFF

//CURRENT MODAL MOVIE DATA GOES HERE
	$scope.movieData = [];

    $scope.showModal1 = false;
    
    $scope.hide = function(m){
        if(m === 1){
            $scope.showModal1 = false;
        }
    }
})