function solve() {
  const input = document.querySelector('div textarea')
  const generateButton = document.querySelector('#exercise button')
  const firstCheckbox = document.querySelector('tbody input')
  firstCheckbox.disabled = false

  generateButton.addEventListener('click', () => {
    let arr = JSON.parse(input.value)
    let tbody = document.querySelector('tbody')
    arr.forEach(element => {
      let tr = document.createElement('tr')
      tr.innerHTML = `<td><img src="${element.img}"/></td>
      <td><p>${element.name}</p></td>
      <td><p>${Number(element.price)}</p></td>
      <td><p>${element.decFactor}</p></td>
      <td><input type="checkbox"/></td>`
      tbody.appendChild(tr)
    });
    input.value = ''
  })

  const buyBtn = Array.from(document.querySelectorAll('#exercise button'))[1]
  buyBtn.addEventListener('click', () => {
    const obj = {
      "Bought furniture": [],
      "Total price": 0,
      "Average decoration factor": 0
    }
    const checkBtns = Array.from(document.querySelectorAll("tbody input"))
    checkBtns.forEach(btn => {
      if (btn.checked) {
        obj["Bought furniture"].push(btn.parentElement.parentElement.children[1].firstElementChild.textContent)
        obj["Total price"] += Number(btn.parentElement.parentElement.children[2].firstElementChild.textContent)
        obj["Average decoration factor"] += Number(btn.parentElement.parentElement.children[3].firstElementChild.textContent)
      }
      const outputField = Array.from(document.querySelectorAll('#exercise textarea'))[1]
      outputField.textContent = `Bought furniture: ${obj["Bought furniture"]
        .join(", ")}\nTotal price: ${Number(obj["Total price"])
          .toFixed(2)}\nAverage decoration factor: ${Number(obj["Average decoration factor"]) / obj["Bought furniture"].length}`
      btn.disabled = "true"
    })
  })
}