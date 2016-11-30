'use strict';

var appConfig = angular.module('AppConfig', []);

appConfig.constant("CONFIGURATIONS", {
  "firstName": {
    "rules" : {
       'ng-minlength' : 2,
       'ng-maxlength': 5,
       'required' : true
    },
    "messages" : {
      'minlength' : "error_too_short",
      'required' : "error_required",
      'maxlength' :"error_too_long"
    }
  },
  "lastName": {
    "rules": {
       'ng-minlength' : 6,
       'ng-maxlength': 8,
       'required' : true
    },
    "messages" : {
      'minlength' : "error_too_short",
      'required' : "error_required",
      'maxlength': "error_too_long"
    }

  },
  "userName": {
    "rules": {
       'ng-minlength' : 6,
       'ng-maxlength': 15,
       'required' : true
    },
    "messages" : {
      'minlength' : "error_too_short",
      'required' : "error_required",
      'maxlength': "error_too_long"
    }    
  },
    "email": {
    "rules": {
       'ng-minlength' : 6,
       'ng-maxlength': 15,
       'required' : true
    },
    "messages" : {
      'minlength' : "error_too_short",
      'required' : "error_required",
      'maxlength': "error_too_long"
    }    
  }
})