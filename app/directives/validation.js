appConfig.directive('validationDirective', [
  'CONFIGURATIONS',
  '$compile',
  function(CONFIGURATIONS, $compile, link) {
    return {
      scope: {
        validationDirective: '@'
      },

     link: function(scope, element, attr) {
        var config = CONFIGURATIONS[scope.validationDirective]['rules'];
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
    require: 'ngModel',
       link: function(scope, elem, attr, ngModel){
        console.log(attr)

        var originalPassword = attr.matchPassword;
        var confirmPassword = attr.ngModel;

        scope.$parent.$watch(originalPassword, function() {
          console.log(scope.$parent.formData.password)
          ngModel.$setValidity('passmatch', checker());
        });

        scope.$watch(confirmPassword, function(){
          console.log(ngModel.$viewValue)
          ngModel.$setValidity('passmatch', checker());
        });

        var checker = function() {
          return scope.$parent.formData.password === ngModel.$viewValue;
        };

        }
    }
}]);



