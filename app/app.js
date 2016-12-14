var myApp = angular.module('myApp', [
  'ui.router',
  'AppConfig',
  'registerService',
  'ui.validate',
  'homeModule',
  'registerModule',
  'formModule',
  'getTranslations'
  ]);

myApp.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);


  var home = {
  name: 'home',
  url: '/home',
  templateUrl: 'components/home/home.html',
  controller: 'HomeController'
    }



  var register = {
  name: 'register',
  url: '/register',
  templateUrl: 'components/register/register.html',
  controller: 'RegisterController'
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
  $stateProvider.state(register);
  $stateProvider.state(form);
  $stateProvider.state(nameForm);
  $stateProvider.state(profileForm);
  $stateProvider.state(cityForm);
});







