// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0, а также,
// добавить проверку на ввод только чисел. Если проверка true, то вывести в div
// удвоенное значение инпута

const btn = document.querySelector('button')
const inp = document.querySelector('input')
const div = document.querySelector('div')

btn.addEventListener('click', () => {
    try {
        if (inp.value < 0) throw new Error ('Input < 0')
        if (isNaN(inp.value)) throw new Error ('Not a number')
        div.textContent = inp.value * 2
    } catch (error) {
        alert(error.message)
    }
})