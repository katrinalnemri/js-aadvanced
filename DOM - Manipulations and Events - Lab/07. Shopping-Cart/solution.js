function solve() {
   const productsList = Array.from(document.querySelectorAll('.product'))
   const textArea = document.querySelector('textarea')
   const list = {}
   const btnsArr = Array.from(document.querySelectorAll('.product-add button'))

   productsList.forEach(product => {
      let btnAdd = product.querySelector('.product-add button')
      btnAdd.addEventListener('click', addClick)
      let productTitle = product.querySelector('.product-details .product-title')
      let productPrice = product.querySelector('.product-line-price')
      function addClick(e) {
         e.preventDefault()
         textArea.textContent += `Added ${productTitle.textContent} for ${Number(productPrice.textContent).toFixed(2)} to the cart.` + '\n'
         if (!list.hasOwnProperty(productTitle.textContent)) {
            list[productTitle.textContent] = 0
         }
         list[productTitle.textContent] += Number(productPrice.textContent)
      }
   })

   let btnCheckOut = document.querySelector('.checkout')
   btnCheckOut.addEventListener('click', checkOut)

   function checkOut(e) {
      e.preventDefault()
      let sum = Object.values(list).reduce((a, b) =>
         a + b, 0)
      textArea.textContent += `You bought ${Object.keys(list).join(", ")} for ${sum.toFixed(2)}.`
      btnCheckOut.setAttribute('disabled', true)
      btnsArr.forEach(btn => {
         btn.setAttribute('disabled', true)
      })
   }
}