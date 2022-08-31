const rgbToHexColor = require("./rgbToHex")
const { expect } = require("chai")

describe('Testing functionality', () => {
    it('should be returned in hexadecimal format', () => {
        expect(rgbToHexColor(1,2,3)).to.equal("#010203")
    });
    it('should return undefined', () => {
        expect(rgbToHexColor(1,"2",3)).to.equal(undefined)
        expect(rgbToHexColor(256,1,3)).to.equal(undefined)
        expect(rgbToHexColor(255,1,-3)).to.equal(undefined)
        expect(rgbToHexColor('a',1,25)).to.equal(undefined)
        expect(rgbToHexColor(5.8,1,25)).to.equal(undefined)
    });
    it("no input test", () => {
        expect(rgbToHexColor()).to.be.undefined;
    })
    it("test with 255", () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    })
    it("test with zeros", () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    })
    it("should pad values with zeros", () => {
        expect(rgbToHexColor(12, 13, 14)).to.equal("#0C0D0E");
    })
});