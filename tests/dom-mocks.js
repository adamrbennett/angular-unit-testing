// mock dom
var jsdom = require('jsdom').jsdom;
global.document = jsdom('<html><head><script></script></head><body></body></html>');
global.window = global.document.defaultView;
global.navigator = window.navigator = {
    userAgent: 'node'
};
global.Node = window.Node;

global.window.mocha = {};
global.window.beforeEach = beforeEach;
global.window.afterEach = afterEach;

// mock angular
require('angular/angular');
require('angular-mocks');

global.angular = global.window.angular;
global.inject = global.angular.mock.inject;
global.ngModule = global.angular.mock.module;