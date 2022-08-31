function search() {
   let townsArr = Array.from(document.querySelectorAll('#towns li'))
   let searchText = document.querySelector('#searchText').value
   let result = document.querySelector('#result')
   let count = 0
   townsArr.forEach(el => {
      if (el.textContent.toLowerCase().includes(searchText.toLowerCase())) {
         el.style.textDecoration = "underline"
         el.style.fontWeight = "bold"
         count++
      }
   })
   result.textContent = `${count} matches found`
}
