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
  controller: 'HomeController',
  resolve: {
     delayedData: function($q, getTranslations, $rootScope){
       var generalPromise = getTranslations.getTranslations('general', 'en');
       var pathPromise = getTranslations.getTranslations('home', 'en');

       //return getTranslations.exposeTranslations();

       return $q.all([generalPromise.$promise, pathPromise.$promise]).then(function(){
          $rootScope.generalTranslations = generalPromise;
          $rootScope.pathTranslations = pathPromise;
       })
       
    }
  }
}



  var register = {
  name: 'register',
  url: '/register',
  templateUrl: 'components/register/register.html',
  controller: 'RegisterController',
  resolve: {
     delayedData: function($q, getTranslations, $rootScope){
       var generalPromise = getTranslations.getTranslations('general', 'en');
       var pathPromise = getTranslations.getTranslations('register', 'en');

      // return getTranslations.exposeTranslations();

       return $q.all([generalPromise.$promise, pathPromise.$promise]).then(function(){
          $rootScope.generalTranslations = generalPromise;
          $rootScope.pathTranslations = pathPromise;
       })
       
       
    }
  }
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



myApp.run(function($rootScope, getTranslations, $state, $interpolate, $q){


      $rootScope.$on('$stateChangeSuccess', function(){

            console.log('state change success fired')
            var stateName = $state.current.name;
            $rootScope.selectedLanguage = "en";

           console.log($rootScope.generalTranslations)
           console.log($rootScope.pathTranslations)
            

          $rootScope.justGetItDone = function(label, isGeneral, parameters){
            if(parameters == null && isGeneral == 0){
              return $rootScope.pathTranslations[label]
            } else if(parameters == null && isGeneral == 1) {
              return $rootScope.generalTranslations[label]        
            } else if(parameters !== null && isGeneral == 0){
              return $interpolate($rootScope.pathTranslations[label])(parameters);
            } else if(parameters !== null && isGeneral == 1){
              return $interpolate($rootScope.generalTranslations[label])(parameters);
            }
          }
          


      })

})





