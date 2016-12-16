'use strict';

angular.module('getTranslations', ['ngResource'])
.service('getTranslations', function($resource, $q) { 

	this.translations = {
		general : [],
		path : []
	}

	this.promises = {
		general : [],
		path : []
	}

	var _self = this;

    this.getTranslations = function(stateName, language) {
        var languageFilePath = 'translations/' + language + '/' + stateName + '.json';
        var generalFilePath = 'translations/' + language + '/' + 'general' + '.json';

        _self.promises.general = $resource(generalFilePath).get(function(data){
        }).$promise

        _self.promises.path = $resource(languageFilePath).get(function(data){
        }).$promise

        return [_self.promises.general, _self.promises.path];



     // return $resource(languageFilePath).get(function (data) {    	
     //     _self.promises.path = data;
     //     console.log(_self.promises.path)  
     //     return _self.translations;           
     // });        
       //$q, $q.all
    };	

	this.translate = function() {
		$q.all([_self.promises.general, _self.promises.path]).then(function(resp1){
			//_self.translations is usable here
			_self.translations.general = angular.toJson(resp1[0], 1);	//removed resp2 because i get an array in resp1
			_self.translations.path = angular.toJson(resp1[1], 1);	//removed resp2 because i get an array in resp1


			console.log(_self.translations.general)
			console.log(_self.translations.path)
	
			
		})
	}

 //   
 //      register.get().$promise.then(function (data){
 //    $scope.message = data.message;
 //  });





});