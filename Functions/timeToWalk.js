function timeToWalk(steps, meters, speed) {

    let sumSteps = steps * meters
    let speedSec = speed / 3.6
    let sumTime = sumSteps / speedSec
    let rest = Math.floor(sumSteps / 500)

    let minutes = Math.floor(sumTime / 60)
    let seconds = Math.round(sumTime - (minutes * 60))
    let hours = Math.floor(sumTime / 3600)

    console.log((hours < 10 ? "0" : "") + hours + ":" + (minutes + rest < 10 ? "0" : "") + (minutes + rest) + ":" + (seconds < 10 ? "0" : "") + seconds);
}
timeToWalk(2564, 0.70, 5.5)