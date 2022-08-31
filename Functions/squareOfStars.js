function squareOfStars(param) {
    if (param === undefined) {
        param = 5
    }
    let arr = new Array()
    let star = '*'
    for (let i = 0; i < param; i++) {
        let arrInner = new Array()
        for (let j = 0; j < param; j++) {
            arrInner.push(star)
        }
        arr.push(arrInner)
    }
    for (let line of arr) {
        console.log(line.join(" "))
    }
}
squareOfStars(3)