// Напишите алгоритм для нахождения факториала числа

const inp = document.querySelector('input')
const btn = document.querySelector('button')
const p = document.querySelector('p')

btn.addEventListener('click', () => {
    try {
        const val = inp.value
        function getFactorial(val) {
            if (val == 1) return 1
            return val * getFactorial(val - 1)
        }
        const res = getFactorial(val)
        p.textContent = res
    } catch (error) {
        alert(error.message)
    }
})