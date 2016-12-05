angular.module('formModule', ['registerService']).controller('formController2', function($scope, $state, register){
  $scope.formData = {};
  $scope.forms = {};

  //Age Minimum Restriction
  var today = new Date();
  var minAge = 18;
  $scope.minAge = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());


/* debugging purpose
  $scope.$watch('forms.myForm', function(form) {
  if(form) {
     console.log($scope.forms.myForm);
  }
});
*/

//Used to redirect user
$scope.go = $state.go.bind($state);



//getting the message from the service
  $scope.processForm = function() {
   register.get().$promise.then(function (data){
     $scope.message = data.message;
   });
    }
});