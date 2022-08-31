function solve() {
    const inputName = document.getElementsByTagName('input')[0]
    const inputHall = document.getElementsByTagName('input')[1]
    const inputPrice = document.getElementsByTagName('input')[2]
    const buttonOnScreen = document.querySelector('#container button')
    const moviesList = document.querySelector('#movies ul')
    const clearBtn = document.querySelector('#archive button')
    clearBtn.addEventListener('click',clearAll)
    const archiveList = document.querySelector('#archive ul')

    let movieName, moviePrice

    buttonOnScreen.addEventListener('click', (e) => {
        e.preventDefault()
        if (inputName.value === '' ||
            inputHall.value === '' ||
            inputPrice.value === '') {
            return
        }
        if(!Number(inputPrice.value)){
            return
        }
        let newLi = document.createElement('li')
            movieName = document.createElement('span')
            movieName.textContent = inputName.value
            newLi.appendChild(movieName)
            let movieHall = document.createElement('strong')
            movieHall.textContent = `Hall: ${inputHall.value}`
            newLi.appendChild(movieHall)
            let div = document.createElement('div')
            moviePrice = document.createElement('strong')
            moviePrice.textContent = Number(inputPrice.value).toFixed(2)
            div.appendChild(moviePrice)
            let inputSold = document.createElement('input')
            inputSold.placeholder = 'Tickets Sold'
            div.appendChild(inputSold)
            let archiveBtn = document.createElement('button')
            archiveBtn.textContent = "Archive"
            archiveBtn.addEventListener('click', archived)
            div.appendChild(archiveBtn)
            newLi.appendChild(div)
            moviesList.appendChild(newLi)
        
        inputName.value = ''
            inputHall.value = ''
            inputPrice.value = ''
            
    })

    function archived(b) {
        b.preventDefault()
        moviePrice = b.target.parentNode.getElementsByTagName('strong')[0].textContent
        let sold = b.target.parentNode.getElementsByTagName('input')[0].value
        if (!Number(sold) || sold === '') { 
            return
        }
        movieName = b.target.parentNode.parentNode.getElementsByTagName('span')[0].textContent
            let archiveLi = document.createElement('li')
            let archiveName = document.createElement('span')
            archiveName.textContent = movieName
            archiveLi.appendChild(archiveName)
            let total = document.createElement('strong')
            total.textContent = `Total amount: ${(Number(moviePrice) * Number(sold)).toFixed(2)}`
            archiveLi.appendChild(total)
            let deleteBtn = document.createElement('button')
            deleteBtn.addEventListener('click', deleted)
            deleteBtn.textContent = "Delete"
            archiveLi.appendChild(deleteBtn)
         
            archiveList.appendChild(archiveLi)
            b.target.parentNode.parentNode.remove()
    }

    function deleted(a) {
        a.preventDefault()
        e.target.parentNode.remove()
    }

    function clearAll(c){
        c.preventDefault()
        archiveList.innerHTML = null
    }
    
}