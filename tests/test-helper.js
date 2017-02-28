// setup dom and angular mocks
var jsdom = require('jsdom').jsdom;

global.document = jsdom('<html><head><script></script></head><body></body></html>');
global.window = global.document.defaultView;
global.navigator = window.navigator = {
    userAgent: 'dummy-agent'
};
global.Node = window.Node;

global.window.mocha = {};
global.window.beforeEach = beforeEach;
global.window.afterEach = afterEach;

// angular imports
require('angular/angular');
require('angular-mocks');

global.angular = window.angular;
global.inject = global.angular.mock.inject;
global.ngModule = global.angular.mock.module;

require('angular-aria');
require('angular-messages');
require('angular-material');

// app imports
require('../app/app.module');

require('../app/services/services.module');
require('../app/services/extras.service');
require('../app/services/roasts.service');
require('../app/services/order.service');

require('../app/order/order.module');
require('../app/order/order-form.component');