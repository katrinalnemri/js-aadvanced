function biggestElement(arr) {
    let newArr = []
    arr.forEach(element => {
        element.forEach(el => {
            newArr.push(el)
        })
    });
    console.log(Math.max(...newArr))
}
biggestElement([[20, 50, 10],
    [8, 33, 145]]
   )