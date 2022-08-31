function magicMatrices(arr) {
    let isMagic = true;
    let sum = 0;
    for (let k = 0; k < arr[0].length; k++) {
        sum += arr[0][k];
    }
    for (let i = 0; i < arr.length; i++) {
        let sumRows = 0;
        let sumCols = 0;
        for (let j = 0; j < arr.length; j++) {
            sumRows += arr[i][j];
            sumCols += arr[j][i];
        }
        if (sumRows !== sum || sumCols !== sum) {
            isMagic = false;
            break;
        }
    }
    console.log(isMagic)
}
magicMatrices([[5, 5, 5],
[5, 4, 4],
[5, 4, 3]]

)