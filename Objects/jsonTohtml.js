function fromJSONToHTMLTable(input) {
    let list = JSON.parse(input)

    console.log('<table>')
    let keysArr = []
    Object.keys(list[0]).forEach((x) => {
        x = x.toString().replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/\>/g, '&gt;')
            .replace(/\</g, '&lt;')
            .replace(/'/g, '&#39;');
        keysArr.push(`<th>${x}</th>`)
    })
    console.log(`\t<tr>${keysArr.join("")}</tr>`)
    for (let obj of list) {
        let valuesArr = []
        Object.values(obj).forEach(x => {
            x = x.toString().replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/\>/g, '&gt;')
            .replace(/\</g, '&lt;')
            .replace(/'/g, '&#39;');
            valuesArr.push(`<td>${x}</td>`)
        })
        console.log(`\t<tr>${valuesArr.join("")}</tr>`)
    }
    console.log('</table>')
}
fromJSONToHTMLTable(
    `[{"Name":"Pesho",
    "Score":4,
    " Grade":8},
   {"Name":"Gosho",
    "Score":5,
    " Grade":8}]`
)