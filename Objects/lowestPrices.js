function lowestPrices(arr) {
    let obj = {}
    for (let line of arr) {
        let [town, product, price] = line.split(" | ")
        if (!obj.hasOwnProperty(product)) {
            obj[product] = {
                town,
                price: Number(price)
            }
        }
        if (price < obj[product].price) {
            obj[product].town = town
            obj[product].price = Number(price)
        }
    }
    for (let key in obj) {
        console.log(`${key} -> ${obj[key].price} (${obj[key].town})`)
    }
}
lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 1',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)