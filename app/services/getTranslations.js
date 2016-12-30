'use strict';

var getTranslations = angular.module('getTranslations', ['ngResource']);

getTranslations.service('getTranslations', function($resource, $q, $interpolate, $rootScope) { 

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
        var path = 'translations/' + language + '/' + stateName + '.json';

        if(stateName == 'general'){
        	_self.promises.general = $resource(path).get();
        	return _self.promises.general;
        } else {
        	_self.promises.path = $resource(path).get();
        	return _self.promises.path;
        }        	    
       //$q, $q.all
    };	


    this.exposeTranslations = function(){
    	return $q.all([_self.promises.general, _self.promises.path]).then(function(){
    		$rootScope.generalTranslations = _self.promises.general;
    		$rootScope.pathTranslations = _self.promises.path;
    	})
    }


});

//NOT USED
/*
getTranslations.filter('getCurrentTransl', ['getTranslations', function(getTranslations){
	return function(label, parameters){
		return getTranslations.translateCurrent(label,parameters)
	}
}])
*/