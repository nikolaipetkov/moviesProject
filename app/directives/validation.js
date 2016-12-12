appConfig.directive('validationDirective', [
  'CONFIGURATIONS',
  '$compile',
  function(CONFIGURATIONS, $compile, link) {
    return {
     link: function(scope, element, attrs) {
        var config = CONFIGURATIONS[attrs.validationDirective]['rules'];
        console.log();

       angular.forEach(config, function(key,value){
          element.attr(value,key);
        });

            element.removeAttr('validation-directive'); // needed because of infinite loop
            $compile(element)(scope);   // applies all the rules to the element
      },

      controller: function($scope, $element, $attrs) {      
      }
    };
  }
]).directive('validationMessages', [function() {
    return {

    scope: {
      validationMessages: '@',
      form: '=',
    },
    controller: ['CONFIGURATIONS', '$scope', function(CONFIGURATIONS, $scope) {
      $scope.messages = CONFIGURATIONS[$scope.validationMessages].messages;
    }],
    templateUrl:  'directives/validationMessages.tmpl.html'
    };
  } 
]).directive('usernameAvailable', function($timeout, $q, $http) {
  return {
    restrict: 'AE',
    require: 'ngModel',
    link: function(scope, elm, attr, model) { 
      model.$asyncValidators.usernameExists = function() { 
        
        //console.log(model);
        return $http.get('data/backend.json').then(function(res){+
          $timeout(function(){
            model.$setValidity('usernameExists', !!res.data); 
          }, 1500);
        });         
      };
    }
  } 
}).directive('matchPassword', [function(){
  return {
    restrict: 'A',
    require: 'ngModel',
       link: function(scope, elem, attrs, ngModel){
       
       ngModel.$validators.passmatch = function() {
        return ngModel.$viewValue === attrs.matchPassword;
       }

       attrs.$observe('matchPassword', function (val) {
        console.log(attrs.matchPassword);
         ngModel.$setValidity('passmatch', !val || !ngModel.$viewValue || ngModel.$viewValue === val);
       }); 


     //var originalPassword = attr.matchPassword;
     //var confirmPassword = attr.ngModel;

     //var checker = function() {
     //  return scope.$parent.formData.password === ngModel.$viewValue;
     //};

     //scope.$parent.$watch(originalPassword, function() {
     //  ngModel.$setValidity('passmatch', checker());
     //  console.log(ngModel.$$parentForm.password.$viewValue);
     //});

     //scope.$watch(confirmPassword, function(){
     //  ngModel.$setValidity('passmatch', checker());
     //});

     //var originalPassword = attr.matchPassword;
     //var confirmPassword = attr.ngModel;      

     //var checker = function() {
     //  return ngModel.$$parentForm.password.$viewValue === ngModel.$viewValue;
     //};

     //
     //scope.$parent.$watch(originalPassword, function() {
     //  console.log(ngModel.$$parentForm.password.$$rawModelValue);
     //  ngModel.$setValidity('passmatch', checker());
     //  
     //});

     //scope.$watch(confirmPassword, function(){
     //  ngModel.$setValidity('passmatch', checker());
     //});




        }
    }
}]);



