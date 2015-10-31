'use strict';

/**
 * @ngdoc function
 * @name ex3AngularCustomApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ex3AngularCustomApp
 */
angular.module('ex3AngularCustomApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
