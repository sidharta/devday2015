'use strict';

describe('Controller: Sid3Ctrl', function () {

  // load the controller's module
  beforeEach(module('ex3AngularCustomApp'));

  var Sid3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Sid3Ctrl = $controller('Sid3Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Sid3Ctrl.awesomeThings.length).toBe(3);
  });
});
