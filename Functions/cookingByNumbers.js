function cookingByNumbers(num, a, b, c, d, e) {
    let arr = [a, b, c, d, e]
    num = Number(num)
    for (let command of arr) {
        if (command === "chop") {
            num /= 2
        } else if (command === "dice") {
            num = Math.sqrt(num)
        } else if (command === "spice") {
            num += 1
        } else if (command === "bake") {
            num *= 3
        } else if (command === "fillet") {
            num -= num * 0.2
        }
        console.log(num)
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')