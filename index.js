console.log('funguju!');

/*
const alarmRing = () => {
    let alarmElm = document.querySelector('.alarm');
    alarmElm.classList.add('alarm--ring');
    console.log('5 vteřin uběhlo, zvoní');
}

//setTimeout(alarmRing, 5000);
*/

let buttonElm = document.querySelectorAll('button');

const proces = () => {
    let vstupUzivatel = Number(prompt("Za jak dlouho má minutka zvonit?"));
    let seconds = vstupUzivatel * 1000;
    console.log(seconds);

    buttonElm[1].classList.remove('disabled');
    
    const alarmRing = () => {
        let alarmElm = document.querySelector('.alarm');
        alarmElm.classList.add('alarm--ring');
    }

    let resetAlarmRing = setTimeout(alarmRing, seconds);

    let audioElm = document.querySelector('audio');

    const spustAudio = () => {
        audioElm.play();
    }

    let vypniAudio = setTimeout(spustAudio, seconds);

    const pauseAudio = () => {
        audioElm.pause();
    }

    buttonElm[1].addEventListener('click', pauseAudio);

    const resetRing = () => {
        let alarmElm = document.querySelector('.alarm');
        alarmElm.classList.remove('alarm--ring');
    }

    buttonElm[1].addEventListener('click', resetRing);

    let infoboxElm = document.querySelector('.infobox');

    const odecitej = () => {

        if (vstupUzivatel === 2) {
            --vstupUzivatel;
            infoboxElm.textContent = 'Minutka bude zvonit za ' + vstupUzivatel + ' sekundu';
        } else if (vstupUzivatel >= 3 && vstupUzivatel <= 5) {
            --vstupUzivatel;
            infoboxElm.textContent = 'Minutka bude zvonit za ' + vstupUzivatel + ' sekundy';
        } else if (vstupUzivatel >= 6) {
            --vstupUzivatel;
            infoboxElm.textContent = 'Minutka bude zvonit za ' + vstupUzivatel + ' sekund';
        } else {
            infoboxElm.textContent = 'Zvoní';
        }
        console.log(vstupUzivatel);
    }

    let resetOdecitej = setInterval(odecitej, 1000);

    const resetFunction = () => {
        clearInterval(resetOdecitej);
        clearTimeout(resetAlarmRing);
        clearTimeout(vypniAudio);
        pauseAudio();
        infoboxElm.textContent = 'Vypnuto';
        buttonElm[1].classList.add('disabled');
    }

    buttonElm[1].addEventListener('click', resetFunction);
}

buttonElm[0].addEventListener('click', proces);