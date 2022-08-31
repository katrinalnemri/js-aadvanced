const sum = require('./sumOfNumbers')
const {expect} = require('chai')

describe('Test', () => {
    it('should take an array of numbers as argument and return sum', () => {
        expect(sum([1,2,3])).to.equal(6)
    })
})