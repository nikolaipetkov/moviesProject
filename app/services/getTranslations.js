'use strict';

angular.module('getTranslations', ['ngResource'])
.service('getTranslations', function($resource, $interpolate) { 

	

    this.getTranslation = function($scope, stateName, language) {
        var languageFilePath = 'translations/' + language + '/' + stateName + '.json';
        $resource(languageFilePath).get(function (data) {    	
            $scope.translation = data;             
        });        
    };	

    
    
/*
    this.getLabels = function(label,parameters, isGeneral){
    	isGeneral = isGeneral || 0;
        var languageFilePath = 'translations/en/home.json';
        $resource(languageFilePath).get(function (data) {
            $scope.translation = data;
        });

    	return translation[label];
    };
	*/



});