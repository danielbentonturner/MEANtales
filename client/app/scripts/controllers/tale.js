'use strict';

angular.module('MEANtales') // make sure this is set to whatever it is in your client/scripts/app.js
  .controller('taleCtrl', function ($scope, $http, $location) {
    
    var user,
        tale;

    $scope.tale = tale = {};

    tale.user = user = {};

    tale.submit = function () {
      
      if (
        !user.userName ||
        !user.email
      ) {
        alert('Please fill out all form fields.');
        return false;
      }

      var request = $http.post('/main', user);

      request.success(function (data) {
        console.log(data);
        $location.path('/question-1');
      });

      request.error(function (data) {
        console.log(data);
        alert('A error occured. Please try again.');
      });

    };
  });
