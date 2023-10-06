// Вы вводите строку. Проверить является ли это слово палиндром. Добавить
// проверки

const inp = document.querySelector('input');
const btn = document.querySelector('button');
const res = document.querySelector('.res');

function isValid(inp){
    if (inp.value === '') throw new Error('Input is empty');
    if (!isNaN(inp.value)) throw new Error('Input is not a string')
}

btn.addEventListener('click', () => {
    try {
        isValid(inp);
        if (inp.value == inp.value.split('').reverse().join('')) res.textContent = 'Это палиндром';
        else res.textContent = 'Это не палиндром';
    } catch (error) {
        alert(error.message)
    }
})