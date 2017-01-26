'use strict';

angular.module('newMovieService', ['ngResource'])
	.service('newMovieService', function($resource, $rootScope){
		var service = {
			newMovies: [
				{ title: "Magician", author: "Raymond E. Feist" },
				{ title: "The Hobbit", author: "J.R.R Tolkien" }
			],

			addMovie: function(movie) {
				service.newMovies.push(movie);
				$rootScope.$broadcast('movies.update');
			}

		}
		return service;
	})