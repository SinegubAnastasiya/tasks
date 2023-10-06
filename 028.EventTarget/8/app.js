// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке красным цветом 

const inp = document.querySelector('input');
const btn = document.querySelector('button');
const res = document.querySelector('.res');

btn.addEventListener('click', () => {
    try {
        if (isNaN(inp.value)) {
            res.textContent = 'Input is invalid';
            res.style = 'color: red';
            inp.value = '';
        }
        else {
            if (!res.textContent) res.textContent = inp.value;
            else res.textContent += ',' + inp.value;
            inp.value = '';
        }
    } catch (error) {
        alert(error.message);
    }
})
