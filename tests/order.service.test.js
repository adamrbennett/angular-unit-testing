require('./dom-mocks');

require('../app/services/services.module');
require('../app/services/order.service');

var assert = require('chai').assert;

describe('order.service', function() {

    describe('#placeOrder', function() {

        beforeEach(function() {
            ngModule('services')
        });

        it('should return an order object with a numeric id', inject(function(orderService) {
            var order = {};
            order = orderService.placeOrder(order);

            assert.isOk(order, 'returned nothing');
            assert.typeOf(order, 'object', 'did not return an object');
            assert(order.hasOwnProperty('id'), 'returned order is missing id property');
            assert.isNotNaN(order.id, 'returned order id is not numeric');
        }));

    });

});