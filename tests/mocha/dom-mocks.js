// clear modules and globals
delete require.cache[require.resolve('jsdom')];
delete require.cache[require.resolve('angular')];
delete require.cache[require.resolve('angular/angular')];
delete require.cache[require.resolve('angular-mocks')];

delete global.document;
delete global.window;
delete global.navigator;
delete global.Node;
delete global.angular;
delete global.inject;
delete global.ngModule;

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