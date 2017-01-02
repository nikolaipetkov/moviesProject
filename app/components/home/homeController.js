angular.module('homeModule', ['getTranslations', 'getTrans'])
.controller('HomeController', function($scope, $rootScope, $state, getTranslations, getTransService, $timeout, $interpolate, $q, delayedData){
	$scope.greeting = "Hello from Home Controller";
    
	$scope.test2 = $rootScope.getCurrent('FIRST_NAME', 0, {firstName: "Nikolai21312312", price: 20} );

	$scope.test3 = $rootScope.getCurrent('shouldnotbefound', 0);
	$scope.test4 = $rootScope.getCurrent('shouldnotbefound2', 1);		
});