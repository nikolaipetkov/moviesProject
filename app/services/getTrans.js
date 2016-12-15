'use strict';

var getTrans = angular.module('getTrans', ['ngResource']);

getTrans.factory('getTransService',['$interpolate', function($interpolate, $resource){
	var currentLanguage = 'en';

	var tables = {
		'en': { 'FIRST_NAME': 'First name is {{firstName}} and the price is {{price}} :'},
		'bg': { 'FIRST_NAME': 'Ime'}
	};

	//var tableReal = getTranslationJson.get();

	return {

		getTranslationJson: function($scope, stateName, language){
			var languageFilePath = 'translations/' + language + '/' + stateName + '.json';
        	return $resource(languageFilePath);    
		},

		setCurrentLanguage: function(newCurrentLanguage) {
			currentLanguage = newCurrentLanguage;
		},
		getCurrentLanguage: function(){
			return currentLanguage;
		},
		getTransFn: function(label,parameters){
			if(parameters == null){
				return tables[currentLanguage][label];
			} else {
			return $interpolate(
				tables[currentLanguage][label])(parameters);
			}
		}
	};
}]);

getTrans.filter('getTrans', ['getTransService', function(getTransService){
	return function(label, parameters) {
		return getTransService.getTransFn(label, parameters);
	};
}])