function circleArea(num) {
    let type = typeof (num)
    let result = 0
    if (type === 'number') {
        result = (Math.pow(num, 2) * Math.PI).toFixed(2)
    } else {
        result = `We can not calculate the circle area, because we receive a ${type}.`
    }
    console.log(result)
}
circleArea('name')