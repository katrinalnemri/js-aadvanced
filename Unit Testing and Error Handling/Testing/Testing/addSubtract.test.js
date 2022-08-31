const createCalculator = require("./addSubtract")
const { expect } = require("chai")

describe('Testing the Calculator', () => {
    describe('Return correct type', () => {
        it('should return an object', () => {
            expect(typeof createCalculator()).to.equal("object")
        });
    });

    describe('Checking if all methods exist', () => {
        it('should have a function Add', () => {
            expect(createCalculator()).to.haveOwnProperty("add")
        });
        it('should have a function Subtract', () => {
            expect(createCalculator()).to.haveOwnProperty("subtract")
        });
        it('should have a function Get', () => {
            expect(createCalculator()).to.haveOwnProperty("get")
        });
    });

    describe('Checking the internal sum', () => {
        it('should return 0', () => {
            let calculator = createCalculator()
            let value = calculator.get()
            expect(value).to.equal(0)
        })
        it('should return 5', () => {
            let calculator = createCalculator()
            calculator.add(2)
            calculator.add(3)
            let value = calculator.get()
            expect(value).to.equal(5)
        })
        it('should return -5', () => {
            let calculator = createCalculator()
            calculator.subtract(3)
            calculator.subtract(2)
            let value = calculator.get()
            expect(value).to.equal(-5)
        })
        it('should return 4.2', () => {
            let calculator = createCalculator()
            calculator.add(5.3)
            calculator.subtract(1.1)
            let value = calculator.get()
            expect(value).to.equal(5.3 - 1.1)
        })
        it('should return 2', () => {
            let calculator = createCalculator()
            calculator.add(10)
            calculator.add('-2')
            calculator.subtract('7')
            calculator.subtract(-1)
            let value = calculator.get()
            expect(value).to.equal(2)
        })

        it('should return NaN for string', () => {
            let calculator = createCalculator()
            calculator.add("hello")
            calculator.subtract("hello")
            let value = calculator.get()
            expect(value).to.be.NaN
            expect(value).to.be.NaN
        })
    });

});