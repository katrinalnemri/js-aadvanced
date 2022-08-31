function createSortedList() {

    return {
        arr: [],
        size: 0,
        add(el) {
            this.arr.push(el)
            this.size++
            return this.arr.sort((a, b) => a - b)
        },
        remove(index) {
            if (this.arr[index] !== undefined) {
                this.arr = this.arr.filter((el, i) => i !== index)
                this.size--
                return this.arr.sort((a, b) => a - b)
            }

        },
        get(index) {
            if (this.arr[index] !== undefined) {
                return this.arr[index]
            }
        },
    }
}

let list = createSortedList();
list.add(8);
list.add(4);
list.add(7);
list.add(5);
list.add(6);
list.add(9);
console.log(list.get(5));
console.log(list.get(10));
console.log(list.arr)
console.log(list.size);
list.remove(1);
console.log(list.arr)
console.log(list.size);
