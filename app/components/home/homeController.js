angular.module('homeModule', ['getTranslations'])
.controller('HomeController', function($scope, $state, getTranslations, $timeout){
	$scope.greeting = "Hello from Home Controller";

	$scope.price = 20;

	var stateName = $state.current.name;

	$scope.translate = function(){
		getTranslations.getTranslation($scope, stateName, $scope.selectedLanguage);
	}

	var tellme = function() {
		console.log($scope.translation)
	}

	$timeout(tellme, 1000);
	


	$scope.selectedLanguage = "en";
	$scope.translate();
});