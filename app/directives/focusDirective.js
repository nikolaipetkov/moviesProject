appConfig.directive('focusDirective', function(){
	return {
		link: function(scope, element, attrs) {
			element.focus(function(){
				element.addClass('orange')
			})
			element.blur(function(){
				element.removeClass('orange')
			})
		}
	}
}).directive('lighterDirective', function(){
	return {
		link: function(scope, element, attrs){
			element.dblclick(function(){
				element.addClass('dark')
			})
			element.click(function(){
				element.removeClass('dark')
			})
		}
	}
}).directive('hoverDirective', function(){
	return {
		link: function(scope, element, attrs){
			element.hover(function(){
				element.addClass('dark')
			})
			element.mouseleave(function(){
				element.removeClass('dark')
			})
		}
	}
}).directive('myEnter', function(){
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