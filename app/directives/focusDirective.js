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
})