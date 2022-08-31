function processOddPositions(input) {
    let arr = []
    for (let i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            let newElement = input[i] * 2
            arr.push(newElement)
        }
    }
    return arr.reverse()
}
processOddPositions([10, 15, 20, 25])