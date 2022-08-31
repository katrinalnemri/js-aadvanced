function biggerHalf(arr) {
    arr = arr.sort((a, b) => a - b)
    return arr.slice(arr.length / 2, arr.length)
}
console.log(biggerHalf([4, 7, 2, 5]))