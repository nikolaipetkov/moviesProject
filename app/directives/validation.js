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
        console.log(config);

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
    template:  '<div ng-if="form[validationMessages].$touched">' +
           '<div ng-repeat="(key,message) in messages">' +
             '<p ng-if="form[validationMessages].$error[key]" class="errorShower text-center"> {{message}} </p>' +
             '</div>' +
             '</div>'
    };
  } 
]).directive('usernameAvailable', function($timeout, $q, $http) {
  return {
    restrict: 'AE',
    require: 'ngModel',
    link: function(scope, elm, attr, model) { 
      model.$asyncValidators.usernameExists = function() { 
        
        console.log(model);
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
    link: function(scope, elem, attr, ctrl){
      var firstPassword = '#' + attr.matchPassword;
      elem.add(firstPassword).on('keyup', function(){
        scope.$apply(function(){
          var v = elem.val()===$(firstPassword).val();
          ctrl.$setValidity('passmatch', v);
        });
      });
    }
  }
}]);



