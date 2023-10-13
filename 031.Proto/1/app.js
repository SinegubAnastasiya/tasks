// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо вывести среднее значение
// этого массива

const btn = document.querySelector('button');
const inp = document.querySelector('input');
const p = document.querySelector('p');
const arr = [];

btn.addEventListener('click', () => {
    try {
        if (!inp.value) throw new Error('Input is empty')
        arr.push(inp.value);
        const sum = arr.reduce((sum, el) => {
            return sum + +el;
        }, 0)
        p.textContent = sum / arr.length;
        inp.value = '';
    } catch (error) {
        alert(error.message)
    }
})