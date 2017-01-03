//this is a duplicate of formController2 - could be removed
angular.module('registerModule', ['registerService']).controller('RegisterController',['$scope', '$rootScope', 'register', function($scope, $rootScope, register){

   $scope.formData = {};
   $scope.forms = {};
  
//Age Minimum Restriction
var today = new Date();
var minAge = 18;
$scope.minAge = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
  
$scope.testing = $rootScope.getCurrent("REGISTER", 0, {parameter: " with custom parameter"});
$scope.testing2 = $rootScope.getCurrent("notFoundInRegisterWithParams", 0, {parameter: " with custom parameter"});
  
//getting the message from the service
  $scope.processForm = function() {
     register.get().$promise.then(function (data){
       $scope.message = data.message;
     });
  }

}]);


