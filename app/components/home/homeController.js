angular.module('homeModule', ['getTranslations', 'getTrans'])
.controller('HomeController', function($scope, $rootScope, $state, getTranslations, getTransService, $timeout, $interpolate, $q, delayedData){
	$scope.greeting = "Hello from Home Controller";
	$scope.price = 20;
	$scope.translationData = {
		firstName: 'arede',
		price: 20
	};


	var stateName = $state.current.name;
	$scope.selectedLanguage = "en";



  //$scope.test = delayedData[0];
  //$scope.test2 = $scope.justGetIt('FIRST_NAME', null, {firstName: "Nikolai21312312", price: 20});
  //console.log(delayedData)
    
$scope.test2 = $rootScope.justGetItDone('FIRST_NAME', 0, {firstName: "Nikolai21312312", price: 20} );


	


});