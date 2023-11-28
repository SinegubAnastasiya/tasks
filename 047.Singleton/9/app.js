// Добавить переключение нескольких песен

const prev = document.querySelector('.prev');
const run = document.querySelector('.run');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');
const h1 = document.querySelector('h1');
let flag = true;
const audios = [{path: "./assets/song1.mp3", artist: 'Olga Buzova'}, {path: "./assets/song2.mp3", artist: 'SEREBRO'}, {path: "./assets/song3.mp3", artist: 'DAVA'}];
let current_index_song = 0;

run.addEventListener('click', () => {
    if (flag) {
        audio.play();
        flag = false;
        run.textContent = 'Stop';
    }
    else {
        audio.pause();
        flag = true;
        run.textContent = 'Run';
    }
    h1.textContent = audios[current_index_song].artist;
})

next.addEventListener('click', () => {
    if (audios.length - 1 == current_index_song) return;
    current_index_song++;
    audio.src = audios[current_index_song].path;
    run.textContent = 'Pause';
    h1.textContent = audios[current_index_song].artist;
    audio.play();
    flag = false;
})

prev.addEventListener('click', () => {
    if (current_index_song == 0) return;
    current_index_song--;
    audio.src = audios[current_index_song].path;
    run.textContent = 'Pause';
    h1.textContent = audios[current_index_song].artist;
    audio.play();
    flag = false;
})