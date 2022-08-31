function sumTable() {
    let listSum = Array.from(document.querySelectorAll('tr td:nth-of-type(2n)'))
        .reduce((a, b) => {
            return a + Number(b.textContent);
        }, 0)
    let total = document.getElementById('sum')
    total.textContent = listSum
}