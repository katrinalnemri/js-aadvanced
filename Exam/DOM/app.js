function solve() {
    const firstNameInput = document.getElementById("fname")
    const lastNameInput = document.getElementById("lname")
    const emailInput = document.getElementById("email")
    const birthInput = document.getElementById("birth")
    const positionInput = document.getElementById("position")
    const salaryInput = document.getElementById("salary")
    const addWorkerBtn = document.getElementById("add-worker")
    const contentTable = document.querySelector("#table .tbl-content table #tbody")
    const salaryMessage = document.getElementById("sum")
    let sum = 0

    addWorkerBtn.addEventListener("click", (e) => {
        e.preventDefault()
        if (firstNameInput.value &&
            lastNameInput.value &&
            emailInput.value &&
            birthInput.value &&
            positionInput.value &&
            salaryInput.value) {
            let tr = document.createElement("tr")
            let firstNameTd = document.createElement("td")
            firstNameTd.textContent = firstNameInput.value
            tr.appendChild(firstNameTd)
            let lastNameTd = document.createElement("td")
            lastNameTd.textContent = lastNameInput.value
            tr.appendChild(lastNameTd)
            let emailTd = document.createElement("td")
            emailTd.textContent = emailInput.value
            tr.appendChild(emailTd)
            let birthTd = document.createElement("td")
            birthTd.textContent = birthInput.value
            tr.appendChild(birthTd)
            let positionTd = document.createElement("td")
            positionTd.textContent = positionInput.value
            tr.appendChild(positionTd)
            let salaryTd = document.createElement("td")
            salaryTd.textContent = salaryInput.value
            tr.appendChild(salaryTd)
            let buttonsTd = document.createElement("td")
            let firedBtn = document.createElement("button")
            firedBtn.classList.add("fired")
            firedBtn.textContent = "fired"
            buttonsTd.appendChild(firedBtn)
            let editBtn = document.createElement("button")
            editBtn.classList.add("edit")
            editBtn.textContent = "edit"
            buttonsTd.appendChild(editBtn)
            tr.appendChild(buttonsTd)
            sum += Number(salaryInput.value)
            salaryMessage.textContent = sum.toFixed(2)
            contentTable.appendChild(tr)

            firstNameInput.value = ''
            lastNameInput.value = ''
            emailInput.value = ''
            birthInput.value = ''
            positionInput.value = ''
            salaryInput.value = ''

            editBtn.addEventListener("click", (a) => {
                firstNameInput.value = firstNameTd.textContent
                lastNameInput.value = lastNameTd.textContent
                emailInput.value = emailTd.textContent
                birthInput.value = birthTd.textContent
                positionInput.value = positionTd.textContent
                salaryInput.value = salaryTd.textContent
                sum -= Number(salaryTd.textContent)
                salaryMessage.textContent = sum.toFixed(2)
                contentTable.removeChild(a.target.parentNode.parentNode)
            })

            firedBtn.addEventListener("click", (b) => {
                sum -= Number(salaryTd.textContent)
                salaryMessage.textContent = sum.toFixed(2)
                contentTable.removeChild(b.target.parentNode.parentNode)
            })
        }
    })
}
solve()