require('./dom-mocks');

require('../../app/services/services.module.js');
require('../../app/services/roasts.service.js');

var assert = require('chai').assert;

describe('roasts.service', function() {

    describe('#getRoasts', function() {

        beforeEach(ngModule('services'));

        it('should return an array', inject(function(roastsService) {
            var roasts = roastsService.getRoasts();
            assert(Array.isArray(roasts), 'did not return an array');
        }));

        it('should return objects with name properties', inject(function(roastsService) {
            var roasts = roastsService.getRoasts();
            roasts.forEach(function(roast) {
                assert.typeOf(roast, 'object', 'not an object');
                assert(roast.hasOwnProperty('name'), 'name property missing');
            });
        }));

    });

});