function getArticleGenerator(articles) {
    let contentArea = document.getElementById('content')
    return function showNext() {
        if (articles.length > 0) {
            let firstItem = articles.shift()
            let newItem = document.createElement('article')
            newItem.textContent = firstItem
            contentArea.appendChild(newItem)
        }
    }
}
