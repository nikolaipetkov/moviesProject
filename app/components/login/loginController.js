//this is a duplicate of formController2 - could be removed
angular.module('loginModule', ['registerService']).controller('LoginController',['$scope', 'register', function($scope, register){
	$scope.greeting = "Hello from Login Controller";

  $scope.steps = [
    'Step 1',
    'Step 2',
    'Step 3'
  ];

$scope.selection = $scope.steps[0];


//Current Index
$scope.getCurrentStepIndex = function(){
  return $scope.steps.indexOf($scope.selection);
};
console.log($scope.steps[$scope.getCurrentStepIndex()]);


//Navigate between Steps
$scope.goToStep = function(index) {
  if (!angular.isUndefined($scope.steps[index])){
       $scope.selection = $scope.steps[index];
   }
};


//Check if Next Step available - if not return 'false'
$scope.hasNextStep = function() {
  var currentStep = $scope.getCurrentStepIndex();
  var nextStep = currentStep + 1;

  return !angular.isUndefined(nextStep);
}


//Check if Previous Page available - if not return 'false'
$scope.hasPreviousStep = function() { 
  var currentStep = $scope.getCurrentStepIndex();
  var previousStep = currentStep - 1;

  return !angular.isUndefined(previousStep);
}

//Next
$scope.goNext = function() {
  if($scope.hasNextStep()){
    var currentStep = $scope.getCurrentStepIndex();
    var nextStep = currentStep + 1;
    $scope.selection = $scope.steps[nextStep];
    console.log($scope.steps[nextStep])
  }
}

//Previous
$scope.goPrevious = function() {
  if($scope.hasPreviousStep()){
    var currentStep = $scope.getCurrentStepIndex();
    var previousStep = currentStep - 1;
    $scope.selection = $scope.steps[previousStep];
    console.log($scope.steps[previousStep])
  }
}


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
}]);