function getFibonator() {
    let arr = [];
    arr.push(0, 1)
    return function () {
        let sum = arr.slice(Math.max(arr.length - 2, 0), arr.length)
            .reduce((a, b) => a + b, 0)
        arr.push(sum)
        return arr[arr.length - 2]
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
