var myApp = angular.module('myApp', [
  'ui.router',
  'AppConfig',
  'registerService',
  'ui.validate',
  'homeModule',
  'loginModule',
  'formModule',
  'tabModule'
  ]);

myApp.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);


  var home = {
  name: 'home',
  url: '/home',
  templateUrl: 'components/home/home.html',
  controller: 'HomeController'
    }

  var login = {
  name: 'login',
  url: '/login',
  templateUrl: 'components/login/login.html',
  controller: 'LoginController'
    }

  var form = {
    name: 'form',
    url: '/form',
    templateUrl: 'components/form/form.html',
    controller: 'formController2'
  }

  var nameForm = {
    name: 'form.name',
    url: '/formName',
    templateUrl: 'components/formName/form-name.html'
  }

  var profileForm = {
    name: 'form.profile',
    url: '/formProfile',
    templateUrl: 'components/formProfile/form-profile.html'
  }

  var cityForm = {
    name: 'form.city',
    url: '/formCity',
    templateUrl: 'components/formCity/form-city.html'
  }
  

  $urlRouterProvider.otherwise('/home');

  $stateProvider.state(home);
  $stateProvider.state(login);
  $stateProvider.state(form);
  $stateProvider.state(nameForm);
  $stateProvider.state(profileForm);
  $stateProvider.state(cityForm);
});

/*
myApp.controller('formController', function($scope, $state, register){
  $scope.formData = {};
  $scope.forms = {};

  //Age Minimum Restriction
  var today = new Date();
  var minAge = 18;
  $scope.minAge = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());


//debugging purpose
  $scope.$watch('forms.myForm', function(form) {
  if(form) {
     console.log($scope.forms.myForm);
  }
});


//Used to redirect user
$scope.go = $state.go.bind($state);



//getting the message from the service
  $scope.processForm = function() {
   register.get().$promise.then(function (data){
     $scope.message = data.message;
   });
    }
  });
*/






