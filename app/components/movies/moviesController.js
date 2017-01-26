angular.module('moviesModule', [])
.controller('MoviesController', function($scope, $rootScope, $state){
	$scope.message = "congrats";
	$scope.movieList = [];
	$scope.myMovies = [];
})