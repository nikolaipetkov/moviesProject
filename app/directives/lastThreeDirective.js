myApp.directive('lastThreeDirective', ['moviesProvider', function(moviesProvider){

	return {
		scope: {
			movies: '=',
			list: '='
		},
		restrict: 'E',
		templateUrl: 'directives/lastThreeDirectiveTemplate.html',
		controller: function($scope, $element, $attrs){
		//ng-repeat LimitTo limiter and Text based on that
			$scope.limiter = 3;
			$scope.showMoreLessText = 'Show More';
			$scope.toggleLimit = function(){
				if($scope.limiter == 3){
					$scope.showMoreLessText = 'Show Less';
					$scope.limiter = 10;
				} else {
					$scope.limiter = 3;
					$scope.showMoreLessText = 'Show More';
				}
			}
		},
		link: function(scope, element, attrs){}
	}
}])