function previousDay(year, month, day) {
    let date = new Date(year, month + 1, day - 1)
    let prevDay = date.getDate()
    let prevMonth = date.getMonth() - 1
    let prevYear = date.getFullYear()
    console.log(`${prevYear}-${prevMonth}-${prevDay}`)
}
previousDay(2016, 9, 30)