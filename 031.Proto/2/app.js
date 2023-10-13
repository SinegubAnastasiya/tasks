// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив строк. Необходимо вывести: полный
// массив из всех элементов, а также массив из уникальных значений

const btn = document.querySelector('button');
const inp = document.querySelector('input');
const p = document.querySelector('.arr');
const pNew = document.querySelector('.newArr');
let arr = [];
let nArr = [];

btn.addEventListener('click', () => {
    try {
        if(!inp.value) throw new Error('Input is empty')
        arr.push(inp.value)
        for (let i = 0; i < arr.length; i++) {
            if(!nArr.includes(arr[i])) nArr.push(arr[i])
            else continue
        }
        p.textContent = arr
        pNew.textContent = nArr
        inp.value = ''
    } catch (error) {
        alert(error.message)
    }
})