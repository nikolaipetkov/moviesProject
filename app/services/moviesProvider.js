'use strict';

myApp.service('moviesProvider', function($resource){

	var moviesProvider = this;

	 moviesProvider.movies = [
		{
			title: 'Avatar',
			year: '2009'
		}
	]

	moviesProvider.searchMovie = function(movieName){
		console.log('workin?')
		if(movieName){
			return $resource('http://www.omdbapi.com/?s=' + movieName + '&y=&plot=short&page=1&r=json').get();
		}
	}

	return moviesProvider;
})