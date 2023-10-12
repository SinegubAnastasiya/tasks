// На вход программе подается число в двоичной системе счисления. Необходимо
// преобразовать его в десятичную систему счисления

const inp = document.querySelector('input')
const btn = document.querySelector('button')
const p = document.querySelector('p')
let res = 0;

btn.addEventListener('click', () => {
    try {
        if (!inp.value) throw new Error('Input is empty')
        // res = parseInt(inp.value, 2)
        for (let i = 0; i < inp.value.length; i++) {
            res += +inp.value[i] * 2 ** (inp.value.length - i - 1)
        }
        p.textContent = res
        inp.value = ''
    } catch (error) {
        alert(error.message)
    }
})
