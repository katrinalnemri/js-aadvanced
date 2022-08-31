function heroicInventory(arr) {
    let heroesArr = []
    for (let line of arr) {
        let [name, level, ...items] = line.split(" / ")
        if (line.split(" / ").length > 2) {
            items = items[0].split(", ")
        }
        let obj = {
            name,
            level: Number(level),
            items,
        }
        heroesArr.push(obj)
    }
    return JSON.stringify(heroesArr)
}
console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1']

))