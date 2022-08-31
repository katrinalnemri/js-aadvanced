function calculator() {
    let num1Input, num2Input, resultInput
    const functions = {
        init(num1, num2, result) {
            num1Input = document.querySelector(num1)
            num2Input = document.querySelector(num2)
            resultInput = document.querySelector(result)
        },
        add() {
            resultInput.value = Number(num1Input.value) + Number(num2Input.value)
        },
        subtract() {
            resultInput.value = Number(num1Input.value) - Number(num2Input.value)
        }
    }
    return functions
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




