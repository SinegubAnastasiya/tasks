// Вывести в строчку все вводимые значения через инпут в виде массива, а также
// все удвоенные значения данного массива в div ниже. Добавить проверку, что
// поле не пустое

function isValid(inp) {
    if (!inp.value) throw new Error('input is empty')
    if (isNaN(inp.value)) throw new Error('Not a number')
}

document.querySelector('button').addEventListener('click', () => {
    const inp = document.querySelector('input')
    const div = document.querySelector('div')
    const p = document.querySelector('p')
    try {
        isValid(inp)
        let arr = []
        arr.push(inp.value)
        p.textContent += ` ${arr}`
        div.textContent += arr * 2
    } catch (error) {
        alert(error.message)
    }
})