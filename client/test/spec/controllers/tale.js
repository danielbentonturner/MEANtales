'use strict';

describe('Controller: taleCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var taleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    taleCtrl = $controller('taleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
