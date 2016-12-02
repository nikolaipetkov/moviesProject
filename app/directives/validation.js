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
        //here you should access the backend, to check if username exists
        //and return a promise
        // var defer = $q.defer();
        // $timeout(function(){
        //   model.$setValidity('usernameExists', true); 
        //   defer.resolve;
        // }, 1000);
        // return defer.promise;
        console.log(model);
        return $http.get('data/backend.json').then(function(res){+
          $timeout(function(){
            model.$setValidity('usernameExists', !!res.data); 
          }, 1500);
        }); 
        
        
      };
    }
  } 
}).directive('isUnique',['userService', '$timeout', function(userService, $timeout){
        return {
           restrict: 'A',
           require: 'ngModel',
           link: function (scope, element, attrs, ngModel) {
               scope.$watch(attrs.ngModel, function(value) {
                   userService.isUnique(value)
                              .then(function(data) {+
                                $timeout(function(){
                                   ngModel.$setValidity('unique', data);
                                  }, 1000 );
                              })
                              .catch(function() {+
                                $timeout(function(){
                                   ngModel.$setValidity('unique', false);
                                  }, 2000 );
                              });
               });
           }
      };
}]);



