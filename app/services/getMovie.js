'use strict';

angular.module('getMovieService', ['ngResource'])
	.service('getMovie', function($resource) {
		var pageNumber = 1;

		this.getCertainMovie = function(movieName){
			return $resource('http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json').get()
		}

		this.searchMovie = function(movieName, isNew){
			if(isNew !== undefined){
				pageNumber = 1;
			} 
			return $resource('http://www.omdbapi.com/?s=' + movieName + '&y=&plot=short&page=' + pageNumber + '&r=json').get();
		}

		this.next = function(movieName){
				pageNumber++;
			return this.searchMovie(movieName);
		}

		this.previous = function(movieName){
			if(pageNumber > 1){
				pageNumber--;
				return this.searchMovie(movieName);
			}
		}
	});
