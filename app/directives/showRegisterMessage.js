appConfig.directive('showMessage', function(){
	return {
		restrict: 'A',
		link: function(scope, el, attrs) {
			el.on('click', function(){
				scope.$apply(function(){
					scope.shown = true;
				});
			});
		}
	};
});