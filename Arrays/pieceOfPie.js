function pieceOfPie(arr, first, second) {
    let index1 = arr.indexOf(first);
    let index2 = arr.indexOf(second);
    let output = arr.slice(index1, index2 + 1);
    return output;
}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)