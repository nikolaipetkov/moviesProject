appConfig.directive('validationDirective', [
  'CONFIGURATIONS',
  '$compile',
  function(CONFIGURATIONS, $compile, link) {
    return {
     link: function(scope, element, attrs) {
       var config = CONFIGURATIONS[attrs.validationDirective]['rules'];
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
         //console.log(ngModel)
         ngModel.$validators.passmatch = function() {
          return ngModel.$viewValue === attrs.matchPassword;
         }

         attrs.$observe('matchPassword', function (val) {
           ngModel.$setValidity('passmatch', !val || !ngModel.$viewValue || ngModel.$viewValue === val);
         }); 

      }
  } // JUST TESTING STUFF BELOW
}]).directive('enterElement', function(){
  return function(scope, element){
    element.bind('mouseenter', function(){
      element.addClass('active');
    })
  }
}).directive('leave', function(){
  return function(scope, element){
    element.bind('mouseleave', function(){
      element.removeClass('active');
    })
  }
});
//TESTING STUFF OVER


