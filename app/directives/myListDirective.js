myApp.directive('myListDirective', ['moviesProvider', function(moviesProvider){
	return {
		scope: {
			movies: '=',
			list: '='
		},
		restrict: 'E',
		templateUrl: 'directives/myListDirectiveTemplate.html',
		controller: function($scope, $element, $attrs){},
		link: function(scope, element, attrs){}
	}
}])