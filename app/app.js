var myApp = angular.module('myApp', [
  'ui.router',
  'AppConfig',
  'registerService',
  'ui.validate',
  'mockUniqueService'
  ]);

myApp.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);


  var home = {
  name: 'home',
  url: '/home',
  template: '<div class="jumbotron text-center"> This is HOME </div>',
    }

  var login = {
  name: 'login',
  url: '/login',
  template: '<div class="jumbotron text-center"> This is LOGIN </div>',
    }

  var form = {
    name: 'form',
    url: '/form',
    templateUrl: 'partials/form.html',
    controller: 'formController'
  }

  var nameForm = {
    name: 'form.name',
    url: '/formName',
    templateUrl: 'partials/form-name.html'
  }

  var profileForm = {
    name: 'form.profile',
    url: '/formProfile',
    templateUrl: 'partials/form-profile.html'
  }

  var cityForm = {
    name: 'form.city',
    url: '/formCity',
    templateUrl: 'partials/form-city.html'
  }
  

  $urlRouterProvider.otherwise('/home');

  $stateProvider.state(home);
  $stateProvider.state(login);
  $stateProvider.state(form);
  $stateProvider.state(nameForm);
  $stateProvider.state(profileForm);
  $stateProvider.state(cityForm);
});


myApp.controller('formController', function($scope, $state, register){
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

//show the register message flag
$scope.shown = false;

//getting the message from the service
  $scope.processForm = function() {
   register.get(function (data){
     $scope.message = data.message;
   });
    }
  });







