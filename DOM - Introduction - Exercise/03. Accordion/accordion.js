function toggle() {
    let button = document.getElementsByClassName('button')[0]
    let textField = document.getElementById('extra')

    if (button.textContent === 'More') {
        textField.style.display = 'block'
        button.textContent = 'Less'
    } else {
        textField.style.display = 'none'
        button.textContent = 'More'
    }
}