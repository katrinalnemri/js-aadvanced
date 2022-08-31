function sortArray(arr, def) {
    if (def === 'asc') {
        return arr.sort((a, b) => a - b)
    }
    if (def === 'desc') {
        return arr.sort((a, b) => b - a)
    }
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'))