function editElement(a, b, c) {
    let match = new RegExp(b, 'g')
    a.textContent = a.textContent.replace(match, c)
}