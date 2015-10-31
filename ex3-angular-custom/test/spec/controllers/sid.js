'use strict';

describe('Controller: SidCtrl', function () {

  // load the controller's module
  beforeEach(module('ex3AngularCustomApp'));

  var SidCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SidCtrl = $controller('SidCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SidCtrl.awesomeThings.length).toBe(3);
  });
});
