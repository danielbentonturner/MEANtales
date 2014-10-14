'use strict';

describe('Controller: StartTaleCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var StartTaleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StartTaleCtrl = $controller('StartTaleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
