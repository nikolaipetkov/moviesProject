angular.module('homeModule', [])
.controller('HomeController', function($scope, $rootScope, $state, $timeout, $interpolate, $q, $interval, getMovie, newMovieService){
	$scope.greeting = "Hello from Home Controller"; 

//CLOCK
	var tick = function(){
		$scope.clock = Date.now();
	}
	tick();
	$interval(tick, 1000);

	//$scope.image = "https://www.google.com/images/srpr/logo11w.png";

//Initial Movies
	$scope.movies = [
		{
			name: 'Avatar',
			year: '2009',
			poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg'
		}
	]

	$scope.movie = {};
	$scope.movie.name = '';
	$scope.movieToSearch = {};


//DISPLAY SINGLE MOVIE 
	$scope.getSomeMovie = function(){
		if($scope.movie.name){		
			getMovie.getCertainMovie($scope.movie.name).$promise.then(function (data){
				$scope.movie.movieData = data;
				$scope.movie.movieTitle = data.Title;
				$scope.movie.movieYear = data.Year;
				$scope.movie.poster = data.Poster;
				$scope.movie.movieAwards = data.Awards;
				$scope.movie.movieRating = data.imdbRating;
				console.log($scope.data)
			})
		}
	}

//SEARCH FOR A MOVIE
	$scope.searchMovie = function(whatMovie, isNew){
		if(whatMovie){
			getMovie.searchMovie(whatMovie, isNew).$promise.then(function(data){
				$scope.data = data;
				console.log($scope.data)
			})
		}
	}
//$scope.movie.name || $scope.movieToSearch.name
//RESET UNNEEDED DATA
	$scope.reset = function(){
		$scope.data = null;
		$scope.movie.movieData = null;
	}


//USED FOR UNIQUE-CHECKING ITEMS IN ARRAY
	$scope.contains = function(array, obj) {
		var i = array.length;
		while (i--) {
			if (array[i].name === obj) {
		    	return true;
		   	}
		}
		return false;
	}

//ADD MOVIE TO TABLE
	$scope.addSingle = function(){
		if($scope.movie.movieTitle && !$scope.contains($scope.movies, $scope.movie.movieTitle)){
			$scope.movies.push({
				name: $scope.movie.movieTitle,
				year: $scope.movie.movieYear,
				poster: $scope.movie.poster
			})
		}
	}

//ADD MOVIE TO TABLE USING INDEX FROM NG-REPEAT
	$scope.addSelected = function(index){
		if(!$scope.contains($scope.movies, $scope.data.Search[index].Title)){
			$scope.movies.push({
				name: $scope.data.Search[index].Title,
				year: $scope.data.Search[index].Year,
				poster: $scope.data.Search[index].Poster
			})
		}
	}

//DELETE MOVIE
	$scope.deleteSelected = function(index){
		$scope.movies.splice(index, 1);
	}

//NEXT PAGE
	$scope.getNext = getMovie.next;

//PREVIOUS PAGE
	$scope.getPrevious = getMovie.previous;








//REFACTORING STARTS FROM HERE

	$scope.$on('movies.update', function(event){
		$scope.newMovies = newMovieService.newMovies;
	});

	$scope.newMovies = newMovieService.newMovies;


});


//NOT NEEDED FOR NOW
/*
	$scope.changeLanguage = function(newLanguage) {		
		if(newLanguage !== $rootScope.selectedLanguage){
			$rootScope.selectedLanguage = newLanguage;
			$state.reload();
		}		
	}	

	$scope.isHide = false;

	$scope.hideToggle = function(){
		if($scope.isHide == false){
			$scope.isHide = true;
		} else {
			$scope.isHide = false;
		}
	}

	$scope.options = ["Niki", "Andi", "Stefcho", "Mitko"]

	$scope.logText = function(){
		console.log('some text logged')
	}

	$scope.collapsableOption = false;
	$scope.toggleCollapse = function(){
		$scope.collapsableOption = !$scope.collapsableOption;
	}

	$scope.testing = 'ok';

	$scope.onChange = function(){		
		console.log($scope.user.city0)
		console.log($scope.user.cityAlias)
		console.log($scope.user.city);
	}

*/