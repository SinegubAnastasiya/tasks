// Необходимо по кнопку включать и выключать песню

const btn = document.querySelector('button');
const audio = document.querySelector('audio');
let flag = true;


btn.addEventListener('click', () => {
    if (flag) {
        audio.play();
        flag = false;
        btn.textContent = 'Stop';
    }
    else {
        audio.pause();
        flag = true;
        btn.textContent = 'Run';
    }
})