'use strict';

/**
 * @ngdoc function
 * @name ex3AngularCustomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ex3AngularCustomApp
 */
angular.module('ex3AngularCustomApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
