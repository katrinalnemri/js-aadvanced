function roadRadar(speed, area) {
    let limit = 0
    let overLimit = 0
    switch (area) {
        case "motorway":
            limit = 130
            break
        case "interstate":
            limit = 90
            break
        case "city":
            limit = 50
            break
        case "residential":
            limit = 20
            break
    }
    overLimit = speed - limit
    let status = ""
    if (overLimit > 0) {
        if (overLimit <= 20) {
            status = "speeding"
        } else if (overLimit <= 40) {
            status = "excessive speeding"
        } else {
            status = "reckless driving"
        }
    }
    if (overLimit <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    } else {
        console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${limit} - ${status}`)
    }
}
roadRadar(120, 'interstate')