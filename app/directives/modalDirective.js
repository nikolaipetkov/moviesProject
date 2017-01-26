myApp.directive('modalDirective', ['moviesProvider', function(moviesProvider){
	return {
		restrict: 'E',
		templateUrl: 'directives/modalDirectiveTemplate.html',
		controller: function($scope, $element, $attrs){},
		link: function(scope, element, attrs){}
	}
}])