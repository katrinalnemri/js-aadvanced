function cars(arr) {
    const carsList = {}

    for (let line of arr) {
        if (line.includes("inherit")) {
            let [com, n1, inherit, n2] = line.split(" ")
            if (!carsList.hasOwnProperty(n1)) {
                carsList[n1] = {
                    children: []
                }
            }
            carsList[n2].children.push(n1)
            Object.keys(carsList).forEach(n => {
                if (carsList[n].children.includes(n2)) {
                    carsList[n].children.push(n1)
                }
            })
        } else if (line.includes("set")) {
            let [com, name, key, value] = line.split(" ")
            carsList[name][key] = value
            if (carsList[name].children.length > 0) {
                carsList[name].children.forEach(n => {
                    if (!carsList[n].inherited) {
                        carsList[n].inherited = {}
                    }
                    carsList[n].inherited[key] = value
                });
            }
        } else if (line.includes("print")) {
            let result = []
            let inheritedResult = []
            let [com, name] = line.split(" ")
            delete carsList[name].children
            Object.keys(carsList[name]).forEach(element => {
                if (typeof carsList[name][element] !== 'object') {
                    result.push(`${element}:${carsList[name][element]}`)
                }
            });
            if (carsList[name].inherited) {
                if (Object.keys(carsList[name].inherited).length > 0) {
                    Object.keys(carsList[name].inherited).forEach(e => {
                        inheritedResult.push(`${e}:${carsList[name].inherited[e]}`)
                    })
                }
                inheritedResult.reverse()
            }
            let finalArr = result.concat(inheritedResult)
            console.log(finalArr.join(","))
        } else {
            let [com, name] = line.split(" ")
            if (!carsList.hasOwnProperty(name)) {
                carsList[name] = {
                    children: []
                }
            }
        }
    }
}
cars(['create pesho', 'create gosho inherit pesho', 'create stamat inherit gosho', 'set pesho rank number1', 'set gosho nick goshko', 'print stamat']

)