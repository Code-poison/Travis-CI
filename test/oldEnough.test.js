const isOldEnoughToDrink = require('../js/oldEnough');

describe("isOldEnoughToDrink", function() {
    it("Should_return_false", function() {
        // Failure message:
        // Wrong return value. Make sure its false
        expect(isOldEnoughToDrink(20)).toBe(false);
    });
    it("Should_return_true", function() {
        // Failure message:
        // Wrong return value. Make sure its true
        expect(isOldEnoughToDrink(22)).toBe(true);
    });    
});
