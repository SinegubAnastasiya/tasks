// По условию задачи даны инпут и кнопка. Напишите функцию, которая
// преобразует любое предложение инпута в предложение VAPORWAVE.
// предложение VAPORWAVE преобразует все буквы в верхний регистр и добавляет
// 2 пробела между каждой буквой (или специальным символом)
// Why isn't my code working? – W H Y I S N ' T M Y C O D E W O R K I N G ?

const inp = document.querySelector('input')
const btn = document.querySelector('button')
const p = document.querySelector('p')

btn.addEventListener('click', () => {
    try {
        if (!inp.value) throw new Error('Input is empty')
        const res = inp.value.split('').join('  ').toUpperCase()
        p.textContent= res
        inp.value = ''
    } catch (error) {
        alert(error.message)
    }
}) 