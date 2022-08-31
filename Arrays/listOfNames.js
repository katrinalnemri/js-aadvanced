function listOfNames(arr) {
    let count = 0
    arr.sort((a, b) => a.localeCompare(b))
    for (let name of arr) {
        count++
        console.log(`${count}.${name}`)
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"])