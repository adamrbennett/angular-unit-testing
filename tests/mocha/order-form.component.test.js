require('./dom-mocks');

require('angular-aria');
require('angular-messages');
require('angular-material');

require('../../app/order/order.module.js');
require('../../app/order/order-form.component.js');

var sinon = require('sinon');
var assert = require('chai').assert;

describe('order-form.component', function() {

    describe('#save', function() {

        beforeEach(ngModule('order'));

        it('should place the order', inject(function($rootScope, $componentController) {
            var scope = $rootScope.$new();

            var roastsService = {
                getRoasts: sinon.spy()
            };

            var extrasService = {
                getExtras: sinon.spy()
            };
            var orderService = {
                placeOrder: sinon.spy()
            };

            var ctrl = $componentController('orderForm', {
                $scope: scope,
                roastsService: roastsService,
                extrasService: extrasService,
                orderService: orderService
            });

            var order = {
                name: 'Adam',
                type: 'french-press'
            };
            scope.save(order);

            assert(orderService.placeOrder.calledWith(order), 'order.service#placeOrder not called');
        }));

    });

});