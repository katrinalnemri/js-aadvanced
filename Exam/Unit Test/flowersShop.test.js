describe('check methods', () => {
    it('have all the methods', () => {
        expect(flowerShop).to.has.ownProperty('calcPriceOfFlowers');
        expect(flowerShop).to.has.ownProperty('checkFlowersAvailable');
        expect(flowerShop).to.has.ownProperty('sellFlowers');
    })
});
describe('test calcPriceOfFlowers function', () => {
    it('throws error with non string and NaN input', () => {
        expect(flowerShop.calcPriceOfFlowers.bind('rose', 'this', '6')).to.throw('Invalid input!');
        expect(flowerShop.calcPriceOfFlowers.bind('rose', 1, '6')).to.throw('Invalid input!');
        expect(flowerShop.calcPriceOfFlowers.bind('rose', '1', 6)).to.throw('Invalid input!');
        expect(flowerShop.calcPriceOfFlowers.bind('rose', [], 0.1)).to.throw('Invalid input!');
        expect(flowerShop.calcPriceOfFlowers.bind('rose', 0, {})).to.throw('Invalid input!');
        expect(flowerShop.calcPriceOfFlowers.bind(undefined, 0, [1])).to.throw('Invalid input!');
    });
    it('returns sum message', () => {
        expect(flowerShop.calcPriceOfFlowers('rose', 1, 2)).to.equal('You need $2.00 to buy rose!');
        expect(flowerShop.calcPriceOfFlowers('daisy', 0, 5)).to.equal('You need $0.00 to buy daisy!');
        expect(flowerShop.calcPriceOfFlowers('rose', 1, 0)).to.equal('You need $0.00 to buy rose!');
        expect(flowerShop.calcPriceOfFlowers('rose', 5, 5)).to.equal('You need $25.00 to buy rose!');

    })
});
describe('test checkFlowersAvailable function', () => {
    it('flowers', () => {
        expect(flowerShop.checkFlowersAvailable('rose', ['rose', 'daisy', 'lilly'])).to.equal('The rose are available!');
        expect(flowerShop.checkFlowersAvailable('daisy', ['rose', 'daisy', 'lilly'])).to.equal('The daisy are available!');
        expect(flowerShop.checkFlowersAvailable('rose', ['rose'])).to.equal('The rose are available!');

    });

    it('no available flowers', () => {
        expect(flowerShop.checkFlowersAvailable('roses', [])).to.equal('The roses are sold! You need to purchase more!');
        expect(flowerShop.checkFlowersAvailable('rose', ['roses', 'daisy', 'lilly'])).to.equal('The rose are sold! You need to purchase more!');
        //expect(flowerShop.checkFlowersAvailable(undefined, 0, 1)).to.equal('Invalid input!');
    })
});

describe('test sellFlowers function', () => {
    it('input test', () => {
        expect(flowerShop.sellFlowers.bind(['rose', 'daisy', 'lilly'], '5')).to.throw('Invalid input!');
        expect(flowerShop.sellFlowers.bind(['rose', 'daisy', 'lilly'], undefined)).to.throw('Invalid input!');
        expect(flowerShop.sellFlowers.bind(['rose'], [])).to.throw('Invalid input!');
        expect(flowerShop.sellFlowers.bind([], '0')).to.throw('Invalid input!');
        expect(flowerShop.sellFlowers.bind([], 1)).to.throw('Invalid input!');
        expect(flowerShop.sellFlowers.bind(['rose'], -1)).to.throw('Invalid input!');
        expect(flowerShop.sellFlowers.bind(['rose'], 1)).to.throw('Invalid input!');
        expect(flowerShop.sellFlowers.bind(['rose', 'orchid'], 1.5)).to.throw('Invalid input!');
        expect(flowerShop.sellFlowers.bind(['rose', 'orchid'], [1])).to.throw('Invalid input!');

    });
    it('remove flowers', () => {
        expect(flowerShop.sellFlowers(['rose', 'daisy', 'lilly'], 1)).to.equal('rose / lilly');
        expect(flowerShop.sellFlowers(['rose', 'daisy', 'lilly'], 2)).to.equal('rose / daisy');
    });
});