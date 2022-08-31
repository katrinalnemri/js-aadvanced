function sameNumbers(num) {
    let arr = num.toString()
        .split("")
        .map(Number)
    let first = arr[0]
    let count = 0
    let sum = 0
    arr.forEach(element => {
        if (element === first) {
            count++
        }
        sum += element
    });
    console.log(count === arr.length ? true : false)
    console.log(sum)
}
sameNumbers(1234)