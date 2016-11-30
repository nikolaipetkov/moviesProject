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
             '<p ng-if="form[validationMessages].$error[key]"> {{message}} </p>' +
             '</div>' +
             '</div>'
    };
  } 
]);





