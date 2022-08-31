function gcd(num1, num2) {
    let arr = []
    let min = Math.min(num1, num2)
    for (let i = 0; i <= min; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            arr.push(i)
        }
    }
    let max = Math.max(...arr)
    console.log(max)
}
gcd(15, 30)