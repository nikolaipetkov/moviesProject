angular.module('homeModule', ['getTranslations'])
.controller('HomeController', function($scope, $rootScope, $state, getTranslations, $timeout, $interpolate, $q, $interval){
	$scope.greeting = "Hello from Home Controller"; 

	$scope.changeLanguage = function(newLanguage) {		
		if(newLanguage !== $rootScope.selectedLanguage){
			$rootScope.selectedLanguage = newLanguage;
			$state.reload();
		}		
	}	

	$scope.$watch('checked', function(newVal, oldVal){
		if(newVal !== oldVal){
			console.log('checkbox has been checked')
			console.log(newVal)
			console.log(oldVal)
		}
	})

	$scope.isHide = false;

	$scope.hideToggle = function(){
		if($scope.isHide == false){
		$scope.isHide = true;
		} else {
			$scope.isHide = false;
		}
	}

	$scope.options = ["Niki", "Andi", "Stefcho", "Mitko"]

	$scope.logText = function(){
		console.log('some text logged')
	}

	$scope.collapsableOption = false;
	$scope.toggleCollapse = function(){
		$scope.collapsableOption = !$scope.collapsableOption;
	}

	$scope.testing = 'ok';

	$scope.onChange = function(){		
		console.log($scope.user.city0)
		console.log($scope.user.cityAlias)
		console.log($scope.user.city);
	}

	var tick = function(){
		$scope.clock = Date.now();
	}
	tick();
	$interval(tick, 1000);


});