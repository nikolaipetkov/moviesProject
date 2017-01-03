angular.module('homeModule', ['getTranslations', 'getTrans'])
.controller('HomeController', function($scope, $rootScope, $state, getTranslations, getTransService, $timeout, $interpolate, $q, delayedData){
	$scope.greeting = "Hello from Home Controller";
    
	$scope.test2 = $rootScope.getCurrent('FIRST_NAME', 0, {firstName: "Nikolai21312312", price: 22} );

	$scope.test3 = $rootScope.getCurrent('notFoundPathInstance', 0);
	$scope.test4 = $rootScope.getCurrent('notFoundGeneralInstance', 1);

	$scope.changeLanguage = function(newLanguage) {
		$rootScope.selectedLanguage = newLanguage;
		$state.reload();
	}		
});