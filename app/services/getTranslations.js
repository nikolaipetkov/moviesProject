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
    this.doesExist = function(generalOrPath, labelToCheck){
    	return _self.promises[generalOrPath].hasOwnProperty(labelToCheck)
    }

//Add Label if not existing
	this.addMissingLabel = function(labelToBeAdded, isGeneral, selectedLanguage){
	    localStorage.setItem(labelToBeAdded, labelToBeAdded + " " + $rootScope.selectedLanguage);
	    //console.log(localStorage.getItem(labelToBeAdded));
	}

//Link translations from service to rootScope level
    this.exposeTranslations = function(){
    	return $q.all([_self.promises.general, _self.promises.path]).then(function(){
    		_self.translations.general = _self.promises.general;
    		_self.translations.path = _self.promises.path;
    	})
    }

//Get individual label and return it to controller
//isGeneral argument is not needed anymore?
    this.getCurrent = function(label, parameters){
        if(parameters == undefined){
            if(_self.doesExist('path', label)){
             return _self.promises.path[label];
            } else if(_self.doesExist('general', label)){
              return _self.promises.general[label];
            } else {
                return _self.addMissingLabel(label);
            }
        } else if(parameters !== undefined){
            if(_self.doesExist('path', label)){
                return $interpolate(_self.promises.path[label])(parameters);
            } else if(_self.doesExist('general', label)){
                return $interpolate(_self.promises.general[label])(parameters);
            } else {
                return _self.addMissingLabel(label);
            }
        }
    }
});












