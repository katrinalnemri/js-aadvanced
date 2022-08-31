function listProcessor(arr) {
    let collection = []
    const functions = {
        add(a) {
            collection.push(a)
        },
        remove(a) {
            collection = collection.filter(el => el !== a);
        },
        print() {
            console.log(collection.join(","))
        }
    }
    for (let el of arr) {
        el = el.split(" ")
        functions[el[0]](el[1])
    }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])