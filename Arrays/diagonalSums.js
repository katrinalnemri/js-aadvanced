function diagonalSums(input) {
    let mainD = 0
    let secD = 0
    for (i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (i === j) {
                mainD += input[i][j]
            }
            if (j === input.length - i - 1) {
                secD += input[i][j]
            }
        }
    }
    console.log(mainD, secD)
}
diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   )