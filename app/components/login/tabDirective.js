/*
angular.module('loginModule').directive('tabs', function(){
	return {
		restrict: 'E',
		scope: {
			//formata
		},
		transclude: true,
		controller: function() {
			this.tabs = [];
			this.addTab = function addTab(tab) {
				this.tabs.push(tab);
			};
			this.selectTab = function selectTab(index) {
				for (var i = 0; i < this.tabs.length; i++) {
					this.tabs[i].selected = false;
				}
				this.tabs[index].selected = true;
			};
		},
		controllerAs: 'tabs',
		link: function($scope, $element, $attrs, $ctrl) {
			$ctrl.selectTab($attrs.active || 0);
		},
		 templateUrl: 'components/login/tabs.tmpl.html'

	}
}).directive('tab', function(){ 
	return {
		restrict: 'E',
		scope: {
			label: '@'
		},
		require: '^^tabs',
		transclude: true,
		templateUrl: 'components/login/tab.tmpl.html',
		controller: ['$scope', function($scope){
			$scope.tab = {
				label: $scope.label,
				selected: false
			};
		}],
      	link: function($scope, $element, $attrs, $ctrl) {
	      	$ctrl.addTab($scope.tab);
	    }
	}
});
*/