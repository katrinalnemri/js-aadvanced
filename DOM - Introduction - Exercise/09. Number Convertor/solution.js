function solve() {
    let select = document.getElementById('selectMenuTo')
    let binary = document.createElement('option')
    binary.value = 'binary'
    binary.textContent = 'Binary'

    let hexaDecimal = document.createElement('option')
    hexaDecimal.value = 'hexadecimal'
    hexaDecimal.textContent = 'Hexadecimal'

    select.appendChild(binary)
    select.appendChild(hexaDecimal)

    let selectObj = {
        'binary': num => num.toString(2),
        'hexadecimal': num => num.toString(16).toUpperCase()
    }

    let button = document.querySelector('#container button')

    button.addEventListener('click', () => {
        let input = document.getElementById('input')
        let output = document.getElementById('result')

        output.value = selectObj[select.value](+input.value)
    })

}