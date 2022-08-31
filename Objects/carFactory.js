function carFactory(obj) {
    let newObj = {}
    newObj.model = obj.model
    newObj.engine = {
        power: obj.power,
    }
    newObj.carriage = {
        type: obj.carriage,
        color: obj.color
    }
    let wheel = 0
    if (obj.wheelsize % 2 === 0) {
        wheel = obj.wheelsize - 1
    } else {
        wheel = obj.wheelsize
    }
    newObj.wheels = new Array(4).fill(wheel)

    if (newObj.engine.power <= 90) {
        newObj.engine.power = 90
        newObj.engine.volume = 1800
    } else if (newObj.engine.power > 90 && newObj.engine.power <= 120) {
        newObj.engine.power = 120
        newObj.engine.volume = 2400
    } else {
        newObj.engine.power = 200
        newObj.engine.volume = 3500
    }
    return newObj
}
console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
))