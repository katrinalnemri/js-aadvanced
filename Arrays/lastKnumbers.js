function lastKnumbers(n, k) {
    let arr = [1]
    for (let i = 1; i < n; i++) {
        let sum = 0
        for (let j = arr.length - 1; j > arr.length - 1 - k; j--) {
            if (j >= 0 && j < arr.length) {
                sum += arr[j]
            }
        }
        arr.push(sum)
    }
    return arr
}
console.log(lastKnumbers(6, 3))

