'use strict';

angular.module('getMovieService', ['ngResource'])
	.service('getMovie', function($resource) {
		this.getCertainMovie = function(movieName){
			return $resource('http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json').get()
		}

		this.searchMovie = function(movieName){
			return $resource('http://www.omdbapi.com/?s=' + movieName + '&y=&plot=short&r=json').get()
		}	

		//return $resource('http://www.omdbapi.com/?t=rogue+one&y=&plot=short&r=json');
	});