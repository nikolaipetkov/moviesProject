'use strict';

angular.module('registerService', ['ngResource'])
.factory('register', function($resource) {
  return $resource('data/result.json');
});