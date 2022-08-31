function addItem() {
    let addEl = document.getElementById('newItemText').value
    let button = document.querySelector('input[type="button"]')
    let list = document.getElementById('items')
    button.addEventListener('click', addItem)

    let newEl = document.createElement('li')
    newEl.textContent = addEl

    list.appendChild(newEl)
}