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
       'ng-minlength' : 3,
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
       'ng-minlength' : 3,
       'ng-maxlength': 8,
       'required' : true,
       'username-available' : 'username-available'
    },
    "messages" : {
      'minlength' : "error_too_short",
      'required' : "error_required",
      'maxlength': "error_too_long",
      'usernameExists': "error_username_exists_from_directive"
    }    
  },
    "email": {
      "rules": {
        'required' : true,
        'ng-pattern': "/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/"
      },
      "messages" : {
        'required' : "error_required",
        'email': "not_valid_email",
        'pattern': "not_a_valid_pattern"
      }    
  },
    "city": {
      "rules": {
         'ng-minlength' : 3,
         'ng-maxlength': 15,
         'required' : true
      },
      "messages" : {
        'minlength' : "error_too_short",
        'required' : "error_required",
        'maxlength': "error_too_long"
      }    
  },
    "password": {
      "rules": {
         'ng-minlength' : 3,
         'ng-maxlength': 15,
         'required' : true
      },
      "messages" : {
        'minlength' : "error_too_short",
        'required' : "error_required",
        'maxlength': "error_too_long"
      }    
  },
    "confirmPassword": {
      "rules": {
        "match-password" : "password"
      },
      "messages" : {
        //'validator' : "passwords_do_not_match",
        'passmatch': "custom_match_error"
      }    
  },
  "userNamee": {
    "rules": {
       'ng-minlength' : 3,
       'ng-maxlength': 8,
       'required' : true,
    },
    "messages" : {
      'minlength' : "error_too_short",
      'required' : "error_required",
      'maxlength': "error_too_long",
    }    
  }  
})