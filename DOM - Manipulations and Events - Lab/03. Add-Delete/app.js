function addItem() {
    let addEl = document.getElementById('newItemText')
    let list = document.getElementById('items')

    let newEl = document.createElement('li')
    newEl.innerHTML = `${addEl.value} <a href="#">[Delete]</a>`
    list.appendChild(newEl)

    list.addEventListener('click', deleteItem)

    addEl.value = ''

    function deleteItem(item) {
        let element = item.target.parentNode
        element.remove()
    }
}


