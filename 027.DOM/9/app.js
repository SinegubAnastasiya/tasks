// У вас есть кнопка. После каждого нажатия менять background

const btn = document.querySelector('.button');
let flag = false;
const arr = ['red', 'blue', 'green', 'yellow', 'brown', 'magenta'];

btn.addEventListener('click', () => {
    if (!flag) {
        const color = arr[Math.round(Math.random() * arr.length)];
        btn.style = `background-color:${color}`;
        flag = true;
    } else {
        btn.style = 'background-color: white';
        flag = false;
    }
})