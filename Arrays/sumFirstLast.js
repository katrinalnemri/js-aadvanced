function sumFirstLast(arr) {
    arr = arr.map(Number)
    console.log(arr.shift() + arr.pop())
}
sumFirstLast(['20', '30', '40'])