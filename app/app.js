var myApp = angular.module('myApp', [
  'ui.router',
  'ui.validate',
  'homeModule',
  'getMovieService',
  'newMovieService',
  'moviesModule',
  'ngResource'
]);

myApp.config(function($stateProvider, $locationProvider, $urlRouterProvider, $sceProvider) {
	$locationProvider.html5Mode(true);

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'components/home/home.html',
    controller: 'HomeController'
  });

  $stateProvider.state('movies', {
    url: '/movies',
    templateUrl: 'components/movies/movies.html',
    controller: 'MoviesController'
  })

  $urlRouterProvider.otherwise('/home');
});

myApp.run(function($rootScope){})




