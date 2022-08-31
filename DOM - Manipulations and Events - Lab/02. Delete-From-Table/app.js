function deleteByEmail() {
    let emailArr = Array.from(document.querySelectorAll('table tbody tr td'))
    let inputField = document.querySelector('label input[type="text"]').value
    let result = document.getElementById('result')
    emailArr.forEach((el, index) => {
        if (index % 2 !== 0) {
            if (inputField === emailArr[index].textContent) {
                result.textContent = "Deleted."
                emailArr[index].parentElement.remove()
            } else {
                result.textContent = "Not found."
            }
        }
    })
}