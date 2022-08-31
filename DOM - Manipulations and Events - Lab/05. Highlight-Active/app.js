function focused() {
    let elementsArr = Array.from(document.querySelectorAll('div input'))
    elementsArr.forEach(el => {
        el.addEventListener('focus', onfocus)
        el.addEventListener('blur', onblur)
    })

    function onfocus(el) {
        let parentEl = el.target.parentNode
        parentEl.classList.add('focused')
    }

    function onblur(el) {
        let parentEl = el.target.parentNode
        parentEl.classList.remove('focused')
    }
}