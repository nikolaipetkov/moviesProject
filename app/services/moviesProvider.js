'use strict';

myApp.service('moviesProvider', function($resource){

	var moviesProvider = this;
	
	moviesProvider.searchMovie = function(movieName){
		if(movieName){
			return $resource('http://www.omdbapi.com/?s=' + movieName + '&y=&plot=short&page=1&r=json').get();
		}
	}

	moviesProvider.getMovie = function(movieName){
		return $resource('http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json').get()
	}

	return moviesProvider;
})