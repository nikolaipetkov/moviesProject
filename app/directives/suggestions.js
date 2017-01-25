appConfig.directive('suggestionsDirective', function(){
	return {
		require: 'ngModel',
		link: function(scope, element, attrs, model){
			/*jquery style :(
			element.keyup(function(){
				if(model.$viewValue.length > 4){
					console.log(model.$viewValue.length);
					scope.searchMovie(scope.movie.name); / scope.searchMovie(model.$viewValue)
					console.log(scope.data)
				}
			})
			*/

			attrs.$observe('observeField', function(val){
				if(val.length > 4){
					scope.searchMovie(scope.movie.name, 1);
				} else if(val.length < 4){
					scope.reset();
				}
			})

		
		}
	}
})