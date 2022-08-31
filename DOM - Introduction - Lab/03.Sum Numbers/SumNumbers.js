function calc() {
    let firstNum = Number(document.getElementById('num1').value)
    let secondNum = Number(document.getElementById('num2').value)
    let sumField = document.getElementById('sum')
    let sum = firstNum + secondNum
    sumField.value = sum
}
