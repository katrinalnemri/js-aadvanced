function daysInMonth(month, year) {
    let daysCount = new Date(year, month, 0).getDate()
    let daysArr = new Array()

    for (let i = 1; i <= daysCount; i++) {
        daysArr[i] = i
    }
    return daysArr.pop()
}
console.log(daysInMonth(1, 2021))