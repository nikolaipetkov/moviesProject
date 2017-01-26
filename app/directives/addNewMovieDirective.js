angular.module('newMovieService')
	.directive('addNewMovieButton', ['newMovieService', function(newMovieService){
		return {
			restrict: 'A',
			link: function(scope, element, attrs){
				element.bind('click', function(){
					console.log('from the new directive')
					newMovieService.addMovie({title: 'Star wars', author: 'George Lucas'});
				});
			}
		}
	}])