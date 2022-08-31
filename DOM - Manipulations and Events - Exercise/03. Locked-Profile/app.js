function lockedProfile() {
    const buttons = [...document.getElementsByTagName('button')];
    buttons.forEach(button => button.addEventListener('click', onClick));

    function onClick(e) {
        const btn = e.target;
        const profile = btn.parentNode;
        const moreInformation = profile.getElementsByTagName('div')[0];
        const status = profile.querySelector('input[type="radio"]:checked').value;

        if (status === 'unlock') {
            if (btn.textContent === 'Show more') {
                moreInformation.style.display = 'inline-block';
                btn.textContent = 'Hide it';
            } else if (btn.textContent === 'Hide it') {
                moreInformation.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }
    }
}