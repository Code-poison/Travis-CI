var assert = require('assert');
var getProp = require('../js/getProperty');
describe('getProperty', function() {
    describe('get Property', function() {
        var obj = {
                key: 'value',
                color: 'red',
                length: '20'
            };
        it('Should_return_value', function() {            
            var result = getProp.getProperty(obj, 'key');
            assert.equal(result, 'value');
        });
        it('Should_return_red', function(){
            var result = getProp.getProperty(obj, 'color');
            assert.equal(result, 'red');
        });
        it('Should_return_length', function(){
            var result = getProp.getProperty(obj, 'length');
            assert.equal(result, '20');
        })
    })
})