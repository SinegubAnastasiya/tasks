// По условию задачи даны 2 инпута и кнопка. Необходимо вернуть true, если часть
// символов 1 строки есть в другой.
// 'rkqodlw', 'world‘ – true
// 'kacvtas', 'steak' – false

const inp = document.querySelector('#fstr')
const inp2 = document.querySelector('#sstr')
const btn = document.querySelector('button')
const p = document.querySelector('p')

btn.addEventListener('click', () => {
    try {
        let count = 0;
        for (let i = 0; i < inp.value.length; i++) {
            if(inp2.value.includes(inp.value[i])) count++;
        }
        if(count >= 3) p.textContent = true
        else p.textContent = false
    } catch (error) {
        alert(error.message)
    }
})