function agregateElements(arr) {
    let sumAll = arr.reduce((a, b) => a + b)
    let sumConcat = ''
    arr.forEach((el) => sumConcat += el)
    let sumInverse = 0
    arr.forEach((el) => sumInverse += 1 / el)
    console.log(sumAll)
    console.log(sumInverse)
    console.log(sumConcat)
}
agregateElements([2, 4, 8, 16])