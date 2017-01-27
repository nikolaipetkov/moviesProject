myApp.directive('myEnter', function(){
	return {
		link: function(scope, element, attrs){
			element.on('keydown keypress', function(event){
				if(event.which === 13){
					scope.$apply(function(){
						scope.$eval(attrs.myEnter);
					});
					event.preventDefault();
				}
			})
		}
	}
})