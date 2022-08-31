class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity
        this.books = []
    }
    addBook(bookName, bookAuthor) {
        if (this.books.length === this.capacity) {
            throw new Error("Not enough space in the collection.")
        } else {
            this.books.push({
                bookName,
                bookAuthor,
                payed: false
            })
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }
    }
    payBook(bookName) {
        let currentBook = this.books.filter((x) => { return x.bookName === bookName })
        if (currentBook.length <= 0) {
            throw new Error(`${bookName} is not in the collection.`)
        } else if (currentBook[0].payed) {
            throw new Error(`${bookName} has already been paid.`)
        } else {
            currentBook[0].payed = true
            return `${bookName} has been successfully paid.`
        }
    }
    removeBook(bookName) {
        let currentBook = this.books.filter((x) => { return x.bookName === bookName })
        if (currentBook.length <= 0) {
            throw new Error("The book, you're looking for, is not found.")
        } else if (!currentBook[0].payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        } else {
            return `${bookName} remove from the collection.`
        }
    }
    getStatistics(bookAuthor) {
        let output = ''
        if (!bookAuthor) {
            output += `The book collection has ${this.capacity - this.books.length} empty spots left.`
        }
        let sortedBooks = this.books.sort((a, b) => {
            return a.bookName.localeCompare(b.bookName)
        })
        let paid = ''
        for (let book of sortedBooks) {
            if (book.payed) {
                paid = "Has Paid"
            } else {
                paid = "Not Paid"
            }
            if (book.bookAuthor === bookAuthor) {
                output += `${book.bookName} == ${book.bookAuthor} - ${paid}.`
            }
            if (!bookAuthor) {
                output += "\n"
                output += `${book.bookName} == ${book.bookAuthor} - ${paid}.`
            }
        }
        return output
    }
}

const library = new LibraryCollection(1)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('Ulysses', 'James Joyce');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
library.addBook('In Search of Lost Time', 'Marcel Proust');
console.log(library.getStatistics());











