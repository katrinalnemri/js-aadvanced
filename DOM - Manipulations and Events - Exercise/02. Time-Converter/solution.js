function attachEventsListeners() {
    let daysInput = document.getElementById('days')
    let hoursInput = document.getElementById('hours')
    let minutesInput = document.getElementById('minutes')
    let secondsInput = document.getElementById('seconds')

    let daysBtn = document.getElementById('daysBtn')
    let hoursBtn = document.getElementById('hoursBtn')
    let minutesBtn = document.getElementById('minutesBtn')
    let secondsBtn = document.getElementById('secondsBtn')

    let buttons = Array.from(document.querySelectorAll('input[type="button"]'))

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button === daysBtn) {
                hoursInput.value = daysInput.value * 24
                minutesInput.value = daysInput.value * 1440
                secondsInput.value = daysInput.value * 86400
            } else if (button === hoursBtn) {
                daysInput.value = hoursInput.value / 24
                minutesInput.value = hoursInput.value * 60
                secondsInput.value = hoursInput.value * 3600
            } else if (button === minutesBtn) {
                hoursInput.value = minutesInput.value / 60
                daysInput.value = hoursInput.value / 24
                secondsInput.value = minutesInput.value * 60
            } else if (button === secondsBtn) {
                minutesInput.value = secondsInput.value / 60
                hoursInput.value = minutesInput.value / 60
                daysInput.value = hoursInput.value / 24
            }
        })
    })
}