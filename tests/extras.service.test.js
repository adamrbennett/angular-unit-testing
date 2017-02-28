require('./test-helper');

var assert = require('chai').assert;

describe('extras.service', function() {

    describe('#getExtras', function() {

        beforeEach(ngModule('services'));

        it('should return an array', inject(function(extrasService) {
            var extras = extrasService.getExtras();
            assert(Array.isArray(extras), 'did not return an array');
        }));

        it('should return objects with name properties', inject(function(extrasService) {
            var extras = extrasService.getExtras();
            extras.forEach(function(extra) {
                assert.typeOf(extra, 'object', 'not an object');
                assert(extra.hasOwnProperty('name'), 'name property missing');
            });
        }));

    });

});