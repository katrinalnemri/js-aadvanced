function attachGradientEvents() {
    let gradientEl = document.getElementById('gradient')
    let resultEl = document.getElementById('result')

    function mouseHover(e) {
        let percent = Math.floor((e.offsetX / e.target.clientWidth) * 100)
        resultEl.textContent = `${percent}%`
    }
    gradientEl.addEventListener('mousemove', mouseHover)
}