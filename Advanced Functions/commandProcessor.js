function solution() {
    let string = ''
    const functions = {
        append(str) {
            string = string + str
        },
        removeStart(a) {
            let removed = string.slice(0, a)
            string = string.replace(removed, '')
        },
        removeEnd(a) {
            let removed = string.slice(string.length - a, string.length)
            string = string.replace(removed, '')
        },
        print() {
            console.log(string)
        }

    }
    return functions
}
solution()
let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();


