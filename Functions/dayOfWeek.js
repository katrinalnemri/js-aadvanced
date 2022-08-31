function dayOfWeek(day) {
    let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (arr.indexOf(day) >= 0 && arr.indexOf(day) < 7) {
        console.log(arr.indexOf(day) + 1)
    } else {
        console.log('error')
    }
}
dayOfWeek('haha')