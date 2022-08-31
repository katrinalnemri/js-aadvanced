function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableRows = Array.from(document.querySelectorAll('table tbody tr'))
      let searchText = document.querySelector('#searchField').value
      tableRows.forEach(row => row.removeAttribute("class"))
      for (let row of tableRows) {
         if (row.textContent.includes(searchText)) {
            row.className = 'select'
         }
      }
   }
}