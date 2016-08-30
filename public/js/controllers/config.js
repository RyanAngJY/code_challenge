/**
 * Example Controller
 */

'use strict';

angular.module('sloogle').controller('ConfigCtrl', function ($scope, ConfigService) {

    ConfigService.get().then(function (response) {
        $scope.config = response.data;
    });

});