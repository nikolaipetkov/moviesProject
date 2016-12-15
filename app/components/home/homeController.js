angular.module('homeModule', ['getTranslations', 'getTrans'])
.controller('HomeController', function($scope, $state, getTranslations, getTransService, $timeout, $interpolate){
	$scope.greeting = "Hello from Home Controller";
	$scope.price = 20;
	$scope.translationData = {
		firstName: 'arede',
		price: 20
	};

	$scope.selectCurrentLanguage = function(language) {
		getTransService.setCurrentLanguage(language);
	};
	

	//$scope.translate = function(){
	//	getTranslations.getTranslation($scope, stateName, $scope.selectedLanguage);
	//}
//
	//var stateName = $state.current.name;
	//$scope.selectedLanguage = "en";
	//$scope.translate();



//var tellme = function() {
//	console.log($scope.translation)
//}



	//$timeout(tellme, 100);
	


});