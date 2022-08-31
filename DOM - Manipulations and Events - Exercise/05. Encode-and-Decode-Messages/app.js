function encodeAndDecodeMessages() {
    const encodeArea = document.getElementsByTagName('textarea')[0]
    const decodeArea = document.getElementsByTagName('textarea')[1]
    const encodeButton = document.getElementsByTagName('button')[0]
    const decodeButton = document.getElementsByTagName('button')[1]

    encodeButton.addEventListener('click', () => {
        const encodeString = encodeArea.value
    let encodeOutput = []
        for (let letter of encodeString) {
            letter = letter.charCodeAt(0) + 1
            letter = String.fromCharCode(letter)
            encodeOutput.push(letter)
        }
        decodeArea.value = encodeOutput.join("")
        encodeArea.value = ''
    })

    decodeButton.addEventListener('click', () => {
        const decodeString = decodeArea.value
    let decodeOutput = []
        for (let char of decodeString) {
            char = char.charCodeAt(0) - 1
            char = String.fromCharCode(char)
            decodeOutput.push(char)
            decodeArea.value = decodeOutput.join("")
        }
    })
}