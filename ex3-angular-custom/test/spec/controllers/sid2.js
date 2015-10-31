'use strict';

describe('Controller: Sid2Ctrl', function () {

  // load the controller's module
  beforeEach(module('ex3AngularCustomApp'));

  var Sid2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Sid2Ctrl = $controller('Sid2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Sid2Ctrl.awesomeThings.length).toBe(3);
  });
});
