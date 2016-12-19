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


       //$q, $q.all
    };	


		this.translate = function() {
			return $q.all([_self.promises.general, _self.promises.path])
		}



		this.getTranslateFn = function(label, parameters){
			if(parameters == null){
				return _self.translations[label]
			} else {
				return $interpolate(_self.translations.general[label])(parameters);
			}
		}



});


getTranslations.filter('getCurrentTransl', ['getTranslations', function(getTranslations){
	return function(label, parameters){
		return getTranslations.translateCurrent(label,parameters)
	}
}])