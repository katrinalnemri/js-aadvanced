function townPopulation(arr) {
    let obj = {}
    for (let str of arr) {
        [town, population] = str.split(" <-> ")
        if (!obj.hasOwnProperty(town)) {
            obj[town] = Number(population)
        } else {
            obj[town] += Number(population)
        }
    }
    for (let key in obj) {
        console.log(`${key} : ${obj[key]}`)
    }
}
townPopulation(['Sofia <-> 1200000',
    'Sofia <-> 1',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)