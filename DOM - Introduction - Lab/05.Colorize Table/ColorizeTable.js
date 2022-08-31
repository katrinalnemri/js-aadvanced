function colorize() {
    Array.from(document.getElementsByTagName('tr'))
        .forEach((x, y) => {
            if (y % 2 !== 0) {
                x.style.backgroundColor = 'teal'
            }
        })
}