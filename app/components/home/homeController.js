angular.module('homeModule', ['getTranslations', 'getTrans'])
.controller('HomeController', function($scope, $rootScope, $state, getTranslations, getTransService, $timeout, $interpolate, $q){
	$scope.greeting = "Hello from Home Controller";
	$scope.price = 20;
	$scope.translationData = {
		firstName: 'arede',
		price: 20
	};





	$scope.selectCurrentLanguage = function(language) {
		getTransService.setCurrentLanguage(language);
	};
	

	$scope.translate = function(){
		//getTranslations.getTranslations(stateName, $scope.selectedLanguage).$promise.then(function(translations){
		//	console.log(translations);
		
		
	};
	//}

	var stateName = $state.current.name;
	$scope.selectedLanguage = "en";
	$scope.translate();




//var tellme = function() {
//	console.log($scope.translation)
//}



	//$timeout(tellme, 100);
	


});