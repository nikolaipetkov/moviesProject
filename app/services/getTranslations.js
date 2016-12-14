'use strict';

angular.module('getTranslations', ['ngResource'])
.service('getTranslations', function($resource) { 

	 
    this.getTranslation = function($scope, stateName, language) {
        var languageFilePath = 'translations/' + language + '/' + stateName + '.json';
        $resource(languageFilePath).get(function (data) {
            $scope.translation = data;            
        });        
    };	
/*
    this.getLabels = function(label,parameters, general){
    	general = general || 0;
        var languageFilePath = 'translations/home_bg.json';
        $resource(languageFilePath).get(function (data) {
            $scope.translation = data;
        });

    	return translation[label];
    };
    */



});