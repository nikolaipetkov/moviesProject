'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngMessages',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version',
  'AppConfig',
  'ui.router'

]).
config([function($stateProvider) {

  var view1 = {
    name: 'view1',
    url: '/view3',
    template: '<h3>hello world!</h3>'
  }

  var view3 = {
    name: 'view3',
    url: '/view3',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(view1);
  $stateProvider.state(view3);		

}]);
