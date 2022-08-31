function add(a) {
    let sum = a

    function func(b) {
        sum += b
        return func
    }

    func.toString = () => {
        return sum
    }
    return func
}
console.log(add(1)(6)(-3).toString())