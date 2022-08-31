function create(words) {
   let contentArea = document.getElementById('content')

   for (let word of words) {
      let div = document.createElement('div')
      let p = document.createElement('p')
      div.appendChild(p)
      p.textContent = word
      p.style.display = 'none'
      div.addEventListener('click', () => {
         p.style.display = 'block'
      })
      contentArea.appendChild(div)
   }
}