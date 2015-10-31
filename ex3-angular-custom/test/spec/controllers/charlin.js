'use strict';

describe('Controller: CharlinCtrl', function () {

  // load the controller's module
  beforeEach(module('ex3AngularCustomApp'));

  var CharlinCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CharlinCtrl = $controller('CharlinCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CharlinCtrl.awesomeThings.length).toBe(3);
  });
});
