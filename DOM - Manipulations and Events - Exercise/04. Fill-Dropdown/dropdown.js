function addItem() {
    const selectMenu = document.getElementById('menu')
    const itemText = document.getElementById('newItemText')
    const itemValue = document.getElementById('newItemValue')
    const newItem = document.createElement('option')
    
    newItem.value = itemValue.value
    newItem.textContent = itemText.value
    selectMenu.appendChild(newItem)

    itemText.value = ''
    itemValue.value = ''
}