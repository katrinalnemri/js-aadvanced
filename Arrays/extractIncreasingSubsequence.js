function extractIncreasingSubset(arr) {
    let max = Number.MIN_SAFE_INTEGER
    let result = arr.reduce((a, b) => {
        if (b >= max) {
            max = b
            a.push(max)
        }
        return a
    }, [])
    return result.join("\n")
}
console.log(extractIncreasingSubset([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
))