var myApp = angular.module('myApp', [
  'ui.router',
  'AppConfig'
  ]);

myApp.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);

  var form = {
    name: 'form',
    url: '/form',
    templateUrl: 'form.html',
    controller: 'formController'
  }

  var nameForm = {
    name: 'form.name',
    url: '/formName',
    templateUrl: 'form-name.html'
  }

  var profileForm = {
    name: 'form.profile',
    url: '/formProfile',
    templateUrl: 'form-profile.html'
  }

  var interestForm = {
    name: 'form.interests',
    url: '/formInterests',
    templateUrl: 'form-interest.html'
  }
  

  $urlRouterProvider.otherwise('/form');

  $stateProvider.state(form);
  $stateProvider.state(nameForm);
  $stateProvider.state(profileForm);
  $stateProvider.state(interestForm);
});

myApp.controller('formController', function($scope){
  $scope.formData = {};
  $scope.forms = {};

  $scope.$watch('forms.myForm', function(form) {
  if(form) {
     console.log($scope.forms.myForm);
  }
});

  

  $scope.processForm = function() {
    alert('awesome');
  };
})