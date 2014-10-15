'use strict';

angular.module('MEANtales') // make sure this is set to whatever it is in your client/scripts/app.js
  .controller('taleCtrl', function ($scope, $http, $location, userService) {

    $scope.user = userService.user;

    $scope.submitName = function () {

      if (
        !$scope.user.userName ||
        !$scope.user.email
      ) {
        alert('Please fill out all form fields.');
        return false;
      }

      var request = $http.post('/main', $scope.user);

      request.success(function (data) {
        console.log(data);
        $location.path('/questionOne');
      });

      request.error(function (data) {
        console.log(data);
        alert('A error occured. Please try again.');
      });
    };

    $scope.submitQuestionOne = function () {

      if (
        !$scope.user.friendName ||
        !$scope.user.loveName ||
        !$scope.user.petName
      ) {
        alert('Please fill out all form fields.');
        return false;
      }

      var request = $http.post('/questionOne', $scope.user);

      request.success(function (data) {
        console.log(data);
        $location.path('/questionTwo');
      });

      request.error(function (data) {
        console.log(data);
        alert('A error occured. Please try again.');
      });
    };

    $scope.submitQuestionTwo = function () {

      if (
        !$scope.user.choiceOne
      ) {
        alert('Please make a choice.');
        return false;
      }

      var request = $http.post('/questionTwo', $scope.user);

      request.success(function (data) {
        console.log(data);
        $location.path('/questionThree');
      });

      request.error(function (data) {
        console.log(data);
        alert('A error occured. Please try again.');
      });
    };

    $scope.submitQuestionThree = function () {
      var optionText;

      if (
        !$scope.user.choiceTwo
      ) {
        alert('Please make a choice.');
        return false;
      } else if (
        $scope.user.choiceTwo < 0 || $scope.user.choiceTwo > 10 || isNaN($scope.user.choiceTwo)
      ) {
        alert('You must enter a number between 1 and 10.');
        return false;
      }

      var request = $http.post('/questionThree', $scope.user);

      request.success(function (data) {
        console.log(data);
        if ($scope.user.choiceOne === 'optionA') {
          optionText = 'in your package delivery spaceship';
        } else {
          optionText = 'in your delivery service office';
        }

        var randomAliens = (Math.random() * $scope.user.choiceTwo * 10);

        $scope.user.myTale = 'So, there you were, ' + optionText + ', petting your favorite pet, ' + $scope.user.petName + ', when suddenly ' + $scope.user.friendName + ' gasps out loud! ' + $scope.user.loveName + ' looks up from their crossword puzzle and starts cursing loudly, as ' + Math.floor(randomAliens) + ' nasty aliens and/or robots open fire on your location. Oops. The world as you know it vanishes around you.';

        $location.path('/myTale');
      });

      request.error(function (data) {
        console.log(data);
        alert('A error occured. Please try again.');
      });
    };

    $scope.submitMyTale = function () {

      var request = $http.post('/myTale', $scope.user);

      request.success(function (data) {
        console.log(data);
        $location.path('/main');
      });

      request.error(function (data) {
        console.log(data);
        alert('A error occured. Please try again.');
      });
    };

  });
