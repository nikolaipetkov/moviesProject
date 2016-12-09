//this is a duplicate of formController2 - could be removed
angular.module('registerModule', ['registerService']).controller('RegisterController',['$scope', '$rootScope', 'register', function($scope, $rootScope, register){
	$scope.greeting = "Hello from Login Controller";

   $scope.formData = {};
   $scope.forms = {};


  
   //Age Minimum Restriction
   var today = new Date();
   var minAge = 18;
   $scope.minAge = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
  
  
  
  //getting the message from the service
    $scope.processForm = function() {
     register.get().$promise.then(function (data){
       $scope.message = data.message;
     });
      }

    //$scope.shown = false;

  }]);


