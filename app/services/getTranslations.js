'use strict';

var getTranslations = angular.module('getTranslations', ['ngResource']);

getTranslations.service('getTranslations', function($resource, $q, $interpolate, $rootScope) { 


/* MOVED TO ROOTSCOPE LEVEL
	this.translations = {
		general : [],
		path : []
	}
*/
	this.promises = {
		general : [],
		path : []
	}

	var _self = this;

//Get the requested Resource: either Path or General
    this.getTranslations = function(stateName, language) {
        var path = 'translations/' + language + '/' + stateName + '.json';

        if(stateName == 'general'){
        	_self.promises.general = $resource(path).get();
        	return _self.promises.general;
        } else {
        	_self.promises.path = $resource(path).get();
        	return _self.promises.path;
        }        	    
    };	

//Check if Label Exists 
    this.doesExist = function(pathToCheck, labelToCheck){
    	return $rootScope[pathToCheck].hasOwnProperty(labelToCheck)
    }

//Add Label if not existing
	this.addMissingLabel = function(labelToBeAdded, isGeneral, selectedLanguage){
	    localStorage.setItem(labelToBeAdded, labelToBeAdded + " " + isGeneral + " " + selectedLanguage);
	    console.log(localStorage.getItem(labelToBeAdded));
	}

//Link translations from service to rootScope level
    this.exposeTranslations = function(){
    	return $q.all([_self.promises.general, _self.promises.path]).then(function(){
    		$rootScope.generalTranslations = _self.promises.general;
    		$rootScope.pathTranslations = _self.promises.path;
    	})
    }


});









