'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('MEANtales', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'taleCtrl'
      })
      .when('/question-1', {
        templateUrl: 'views/q1.html',
        controller: 'taleCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });
