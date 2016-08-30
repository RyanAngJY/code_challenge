/**
 * Example Service
 */

'use strict';

angular.module('sloogle').factory('ConfigService', function ($http) {
    var service = {};

    service.get = function () {
        return $http.get('/api/config');
    };

    return service;
});