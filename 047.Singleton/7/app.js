// Необходимо по нажатию на кнопку включать музыку

const btn = document.querySelector('button');
const audio = document.querySelector('audio');


btn.addEventListener('click', () => {
    audio.play();
})
