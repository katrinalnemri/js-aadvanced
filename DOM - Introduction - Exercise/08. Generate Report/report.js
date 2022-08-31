function generateReport() {
    let inputChecked = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    let trEls = document.querySelectorAll('tbody tr')

    let checkedEls = []
    for (let i = 0; i < inputChecked.length; i++) {
        if (inputChecked[i].checked) {
            checkedEls.push([inputChecked[i].name, i]);
        }
    }
    let arr = [];

    for (let i = 0; i < trEls.length; i++) {
        let obj = {};

        for (let j = 0; j < checkedEls.length; j++) {
            obj[checkedEls[j][0]] = trEls[i].cells[checkedEls[j][1]].textContent;
        }

        arr.push(obj);
    }

    let result = document.getElementById('output');
    result.value = JSON.stringify(arr, null, ' ');
}