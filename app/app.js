var myApp = angular.module('myApp', [
  'ui.router',
  'ui.validate',
  'moviesModule',
  'ngResource'
]);

myApp.config(function($stateProvider, $locationProvider, $urlRouterProvider, $sceProvider) {
	$locationProvider.html5Mode(true);

  $stateProvider.state('movies', {
    url: '/movies',
    templateUrl: 'components/movies/movies.html',
    controller: 'MoviesController'
  })

  $urlRouterProvider.otherwise('/movies');
});

myApp.run(function($rootScope){})




