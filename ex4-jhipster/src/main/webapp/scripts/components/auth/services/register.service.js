'use strict';

angular.module('devdayApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


