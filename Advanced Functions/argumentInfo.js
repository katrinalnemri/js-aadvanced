function argumentInfo(...arr) {
    let typeObj = {}

    for (let el of arr) {
        let type = typeof el;
      
            console.log(`${type}: ${el}`);

        if (!typeObj[type]) {
            typeObj[type] = [];
        }
        typeObj[type].push(type)
    }
    Object.keys(typeObj).sort((a, b) => typeObj[b].length - typeObj[a].length) 
        .forEach(el => console.log(`${el} = ${typeObj[el].length}`))
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })