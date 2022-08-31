function solve() {
  let conventionInput = document.getElementById('naming-convention')
  let textInput = document.getElementById('text')
  let result = document.getElementById('result')
  let textArr = textInput.value.split(" ")
  let newTextArr = []
  if (conventionInput.value === "Camel Case") {
    newTextArr = []
    for (let i = 0; i < textArr.length; i++) {
      let word = textArr[i]
      word = word.toLowerCase()
      if (i === 0) {
        word = word
      } else {
        word = word[0].toUpperCase() + word.slice(1)
      }
      newTextArr.push(word)
    }
    result.textContent = newTextArr.join("")
  } else if (conventionInput.value === "Pascal Case") {
    newTextArr = []
    for (let i = 0; i < textArr.length; i++) {
      let word = textArr[i]
      word = word.toLowerCase()
      word = word[0].toUpperCase() + word.slice(1)
      newTextArr.push(word)
    }
    result.textContent = newTextArr.join("")
  } else {
    result.textContent = 'Error!'
  }
}