function solution() {
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }
    const products = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let result = ''

    const functions = {
        restock(microelement, quantity) {
            products[microelement] += quantity
            result = 'Success'
        },
        prepare(recipe, quantity) {
            let isEnough = true
            Object.entries(recipes[recipe]).forEach(el => {
                let [microelement, qtty] = el
                if (isEnough && products[microelement] < (qtty * Number(quantity))) {
                    isEnough = false
                    result = `Error: not enough ${microelement} in stock`
                }
            })
            if (isEnough) {
                Object.entries(recipes[recipe]).forEach(el => {
                    let [microelement, qtty] = el
                    products[microelement] -= qtty * quantity
                })
                result = 'Success'
            }
        },
        report() {
            result = ''
            Object.entries(products).forEach(el => {
                let [microelement, quantity] = el
                result += `${microelement}=${quantity} `
            })
        }
    }
    return function (arr) {
        let [command, product, quantity] = arr.split(' ')
        quantity = Number(quantity)
        functions[command](product, quantity)
        return result.trim()
    }
}


let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
