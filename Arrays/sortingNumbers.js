function sortingNumbers(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr.sort((a, b) => a - b)[i])
        newArr.push(arr.sort((a, b) => b - a)[i])
    }
    return newArr.slice(0, newArr.length / 2)
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))