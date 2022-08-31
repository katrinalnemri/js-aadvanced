function townsToJSON(arr) {
    let headings = arr.shift().split(/[|\s+]+/).filter(Boolean)
    let townsArr = []
    for (let line of arr) {
        let townObj = {}
        let [town, latitude, longitude] = line.split(/\s*\|\s*/).filter(Boolean)
        townObj[headings[0]] = town
        townObj[headings[1]] = +Number(latitude).toFixed(2)
        townObj[headings[2]] = +Number(longitude).toFixed(2)
        townsArr.push(townObj)
    }
    console.log(JSON.stringify(townsArr))
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']

)