require('./test-helper');

var assert = require('chai').assert;

describe('order.service', function() {

    describe('#placeOrder', function() {

        beforeEach(ngModule('services'));

        it('should return an order object with a numeric id', inject(function(orderService) {
            var order = {};
            order = orderService.placeOrder(order);

            assert.isOk(order, 'no order returned');
            assert.typeOf(order, 'object', 'did not return an object');
            assert(order.hasOwnProperty('id'), 'missing id property');
            assert.isNotNaN(order.id, 'id is not numeric');
        }));

    });

});