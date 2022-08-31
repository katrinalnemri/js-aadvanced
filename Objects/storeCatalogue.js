function storeCatalogue(arr) {
    let catalogue = {}
    arr.sort((a, b) => a.localeCompare(b))
    for (let line of arr) {
        let [product, price] = line.split(" : ")
        let letter = product[0]
        if (!catalogue.hasOwnProperty(product[0])) {
            catalogue[letter] = {}
        }
        catalogue[letter][product] = Number(price)
    }
    Object.keys(catalogue).forEach(value => {
        console.log(value)
        Object.entries(catalogue[value]).forEach(el => {
            console.log(`  ${el[0]}: ${el[1]}`)
        })
    })
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)