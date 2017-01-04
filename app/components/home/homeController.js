angular.module('homeModule', ['getTranslations'])
.controller('HomeController', function($scope, $rootScope, $state, getTranslations, $timeout, $interpolate, $q){
	$scope.greeting = "Hello from Home Controller"; 

	$scope.changeLanguage = function(newLanguage) {
		
		if(newLanguage !== $rootScope.selectedLanguage){
			$rootScope.selectedLanguage = newLanguage;
			$state.reload();
		}		
	}		
});