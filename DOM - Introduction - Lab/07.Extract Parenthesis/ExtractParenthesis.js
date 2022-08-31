function extract(content) {
    let text = document.getElementById('content').textContent;
    let reg = /([\w ]+)/g
    let output = text.match(reg).join('; ')
    return output
}