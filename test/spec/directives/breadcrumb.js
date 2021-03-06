'use strict';

describe('Directive: breadcrumb', function () {

  // load the directive's module
  beforeEach(module('prmApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<breadcrumb></breadcrumb>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the breadcrumb directive');
  }));
});
