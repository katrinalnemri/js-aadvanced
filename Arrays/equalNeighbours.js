function equalNeighbours(arr) {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i]
        for (let j = 0; j < row.length; j++) {
            let col = row[j]
            if (i !== arr.length - 1) {
                if (col === row[j + 1]) {
                    count++
                }
                if (col === arr[i + 1][j]) {
                    count++
                }
            }
            else if (col === row[j + 1] || col === arr[i][j + 1]) {
                count++
            }
        }
    }
    return count
}
console.log(equalNeighbours([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '5', '2'],
['9', '8', '7', '5', '4']]
))

