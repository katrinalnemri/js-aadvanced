function createSortedList() {
    return {
        collection: [],
        size: 0,
        add(element) {
            this.collection.push(element);
            this.collection.sort((a, b) => a - b);
            this.size++
        },
        remove(index) {
            const length = this.collection.length;
            if (index >= 0 && index < length) {
                this.collection.splice(index, 1);
                this.collection.sort((a, b) => a - b);
                this.size--;
            }
        },
        get(index) {
            const length = this.collection.length;
            if (index >= 0 && index < length) {
                return this.collection[index]
            }
        }
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