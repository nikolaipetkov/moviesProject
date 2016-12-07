angular.module('registerModule').directive('regSteps', function(){

	var controller = ['$scope', '$rootScope', function($scope, $rootScope){

		//get $scope.steps from directive attribute
		//$scope.steps = $scope.steps;

		//$scope.selection = $scope.selection;

$scope.current = 1;

$scope.numsteps = $scope.numSteps;

$scope.getCurrent = function(){
	return $scope.current;
}

//Check if Next Step available - if not return 'false'
$scope.hasNext = function() {
	var nextStep = $scope.current + 1;
	return nextStep < $scope.numsteps;
};

//Check if Previous Step available - if not return 'false'
$scope.hasPrevious = function() {
	var previousStep = $scope.current - 1;
	return previousStep > 0;
};


$scope.goNext = function() {
	if($scope.hasNext()){
		return $scope.current + 1;
	}
}

$scope.goPrevious = function() {
	if($scope.hasPrevious()){
		return $scope.current - 1;
	}
}



	}];
	return {
		scope: {
			numSteps: '@',
		},

		link: function(scope, element, attr) {},

		controller: controller
	};
}).directive('regStep', function(){
	return {
		require: '^^regSteps',
		scope: {
			step: '@'
		},
		link: function(scope, elem, attrs, ctrl){
			}
		}
	}
).directive('next', function(){
	return {
		require: '^^regSteps',
		scope: {},
		link: function(scope, elem, attrs, ctrl){	
		}
	}
})