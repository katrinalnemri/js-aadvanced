const isSymmetric = require('./checkForSymmetry')
const { expect } = require('chai')

describe("Check if Symmetric", () => {
    it('returns true for a symmetric array with numbers', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true
    })

    it('returns false for a non-symmetric array with numbers', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false
    })

    it('returns false for non-array', () => {
        expect(isSymmetric(5)).to.be.false
    })

    it('returns true for a symmetric array with numbers / odd', () => {
    expect(isSymmetric([1, 2, 1])).to.be.true
    })

    it('returns true for a symmetric array with strings', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true
    })

    it('returns true for a symmetric array with strings/ odd', () => {
    expect(isSymmetric(['a', 'b', 'a'])).to.be.true
    })

    it('returns false for a type difference', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false
    })

    it('returns false for a non-symmetric array with strings', () => {
        expect(isSymmetric(['a', 'b', 'c'])).to.be.false
    })

    it('returns false for string parameter', () => {
    expect(isSymmetric('abc')).to.be.false
    })
})