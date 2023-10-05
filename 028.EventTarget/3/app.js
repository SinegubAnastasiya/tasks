// Создайте блок текста с кнопкой "Показать/Скрыть". При клике на кнопку текст
// должен показываться или скрываться.

const btn = document.querySelector('button');
const par = document.querySelector('p');
let flag = false;

// btn.addEventListener('click', () => {
//     if (btn.textContent == "Показать") {
//         par.textContent = 'Hi';
//         btn.textContent = 'Скрыть';
//     } else {
//         par.textContent = '';
//         btn.textContent = 'Показать';
//     }

// })

btn.addEventListener('click', () => {
    if (flag === false) {
        par.style = 'visibility: hidden';
        btn.textContent = 'Показать';
        flag = true;
    } else {
        par.style = 'visibility: visible';
        btn.textContent = 'Скрыть';
        flag = false;
    }
})