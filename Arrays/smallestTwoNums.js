function smallestTwoNums(arr) {
    let newArr = []
    for (let i = 0; i < 2; i++) {
        let smallest = Math.min(...arr)
        newArr.push(smallest)
        arr.splice(arr.indexOf(smallest), 1)
    }
    console.log(newArr.join(" "))
}
smallestTwoNums([30, 15, 50, 5])