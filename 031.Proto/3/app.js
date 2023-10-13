// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо создать объект, где каждый
// ключ – индекс элемента массива, а значение – текущее итерируемое значение
// массива

const btn = document.querySelector('button');
const inp = document.querySelector('input');
const p = document.querySelector('.arr');
const pNew = document.querySelector('.obj');
let arr = [];
let obj = {};

btn.addEventListener('click', () => {
    try {
        if (!inp.value) throw new Error('Input is empty')
        arr.push(inp.value)
        for (let i = 0; i < arr.length; i++) {
            obj[i] = arr[i]
        }
        p.textContent = arr
        pNew.textContent = JSON.stringify(obj)
        inp.value = ''
    } catch (error) {
        alert(error.message)
    }
})
