'use strict';

angular.module('getTranslations', ['ngResource'])
.service('getTranslations', function($resource, $interpolate) { 

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
        return $resource(languageFilePath).get(function (data) {    	
            _self.translations.path = data;  
            return _self.translations;           
        });        
        //$q, $q.all
    };	

    this.translate = function() {
    	$q.all([_self.promises.general, _self.promises.path]).then(function(resp1, resp2){
    		//_self.translations is usable here

    		
    	})
    }

 //   
 //      register.get().$promise.then(function (data){
 //    $scope.message = data.message;
 //  });





});