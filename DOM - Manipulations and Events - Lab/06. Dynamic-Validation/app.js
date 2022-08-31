function validate() {
    let emailField = document.getElementById('email')
    emailField.addEventListener('change', checkIt);

    function checkIt(e) {
        let pattern = /([a-z]+\@[a-z]+\.[a-z]+)/gm
        let valid = pattern.test(emailField.value)
        if (!valid) {
            emailField.classList.add("error")
        } else {
            emailField.classList.remove("error")
        }
    }
}