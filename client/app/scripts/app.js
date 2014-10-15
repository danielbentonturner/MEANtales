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
      .when('/questionOne', {
        templateUrl: 'views/questionOne.html',
        controller: 'taleCtrl'
      })
      .when('/questionTwo', {
        templateUrl: 'views/questionTwo.html',
        controller: 'taleCtrl'
      })
      .when('/questionThree', {
        templateUrl: 'views/questionThree.html',
        controller: 'taleCtrl'
      })
      .when('/myTale', {
        templateUrl: 'views/myTale.html',
        controller: 'taleCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  })
  .service('userService', function () {
    this.user = {};
  });
