function tictactoe(arr) {
    let symbol = "X"
    let field = []
    field.push(new Array(3).fill("false"), new Array(3).fill("false"), new Array(3).fill("false"))
    let count = 0
    for (let row = 0; row < arr.length; row++) {
        let [i, j] = arr[row].split(" ").map(Number)
        if (field[i][j] !== "false") {
            console.log("This place is already taken. Please choose another!")
            continue
        }
        field[i][j] = symbol

        let sumRows = field.map(x => x.reduce((a, b) => a + b))
        let mainDiagonal = field.map((x, j) => x[j]).reduce((a, b) => a + b)
        let secDiagonal = field.map((y, x) => y[y.length - x - 1]).reduce((a, b) => a + b)
        let sumCols = field.reduce((a, b) =>
            a.map((x, i) =>
                x + b[i]
            )
        )
        if (sumRows.includes("XXX") || sumCols.includes("XXX") ||
            mainDiagonal.includes("XXX") || secDiagonal.includes("XXX")) {
            console.log('Player X wins!')
            break
        } else if (sumRows.includes("OOO") || sumCols.includes("OOO") ||
            mainDiagonal.includes("OOO") || secDiagonal.includes("OOO")) {
            console.log('Player O wins!')
            break
        }
        let isWinner = false
        for (let line of field) {
            if (line.includes("false")) {
                isWinner = true
            }
        }
        if (!isWinner) {
            console.log("The game ended! Nobody wins :(")
            break;
        }
        symbol = symbol === 'X' ? 'O' : 'X'
    }
    field.forEach(x => console.log(x.join("\t")))
}
tictactoe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
)