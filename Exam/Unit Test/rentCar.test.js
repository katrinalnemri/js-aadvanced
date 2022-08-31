const rentCar = require("./rentCar")
const { expect } = require("chai")

describe("Tests RentCar function", function() {
    describe("All methods available", function() {
        expect(rentCar).to.has.ownProperty('searchCar');
        expect(rentCar).to.has.ownProperty('calculatePriceOfCar');
        expect(rentCar).to.has.ownProperty('checkBudget');
     });
     // TODO: …
});
