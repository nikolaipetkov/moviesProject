'use strict';

var getTranslations = angular.module('getTranslations', ['ngResource']);

getTranslations.service('getTranslations', function($resource, $q, $interpolate) { 

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
			_self.translations.general = resp1[0];	//removed resp2 because i get an array in resp1
			_self.translations.path = angular.fromJson(resp1[1]);	//removed resp2 because i get an array in resp1			
		})
	}

	this.translateCurrent = function(label,parameters) {
		$q.all([_self.promises.general, _self.promises.path]).then(function(resp1){
			//_self.translations is usable here
			_self.translations.general = resp1[0];	//removed resp2 because i get an array in resp1
			_self.translations.path = angular.fromJson(resp1[1]);	//removed resp2 because i get an array in resp1	
			//console.log(_self.translations.general)
			if(parameters == null){
				console.log(_self.translations.general[label])
				var result = _self.translations.general[label]
				console.log(result)
				return result;
			} else{
				return $interpolate(
					_self.translations.general[label])(parameters);
			} 		
		})
	}



	this.getTranslateFn = function(label, parameters){
		if(parameters == null){
			return _self.translations.general[label]
		} else {
			return $interpolate(_self.translations.general[label])(parameters);
		}
	}
});


getTranslations.filter('getCurrentTransl', ['getTranslations', function(getTranslations){
	return function(label, parameters){
		return getTranslations.translateCurrent(label,parameters);
	}
}])