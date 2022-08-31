function solve() {
  let text = document.querySelector('textarea#input').value.split(".")
    .filter((el) => el.length > 0)
  let output = document.querySelector('#output')
  for (let i = 0; i < text.length; i += 3) {
    let formattedText = []
    for (let j = 0; j < 3; j++) {
      if (text[i + j]) {
        formattedText.push(text[i + j])
      }
    }
    let p = formattedText.join(". ") + '.'
    output.innerHTML += `<p>${p}</p>`
  }
}