'use stric'

angular.module('mockUniqueService', [])
.service('userService', ['$q', '$http', function mockUserService($q, $http) {
    
    this.isUnique = function(username) {
        if (!!username) {
            return $q.when((username === 'admin'));
        }
        return $q.reject("Invalid username");
    }
    
}]);