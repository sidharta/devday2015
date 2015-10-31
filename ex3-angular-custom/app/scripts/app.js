'use strict';

/**
 * @ngdoc overview
 * @name ex3AngularCustomApp
 * @description
 * # ex3AngularCustomApp
 *
 * Main module of the application.
 */
angular
  .module('ex3AngularCustomApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/sid', {
        templateUrl: 'views/sid.html',
        controller: 'SidCtrl',
        controllerAs: 'sid'
      })
      .when('/sid2', {
        templateUrl: 'views/sid2.html',
        controller: 'Sid2Ctrl',
        controllerAs: 'sid2'
      })
      .when('/sid3', {
        templateUrl: 'views/sid3.html',
        controller: 'Sid3Ctrl',
        controllerAs: 'sid3'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl',
        controllerAs: 'faq'
      })
      .when('/charlin', {
        templateUrl: 'views/charlin.html',
        controller: 'CharlinCtrl',
        controllerAs: 'charlin'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
