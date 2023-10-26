// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке красным цветом 



document.querySelector('button').addEventListener('click', () => {
    const inp = document.querySelector('input')
    const p = document.querySelector('p')
    try {
        if (!inp.value) throw new Error ('Input is empty')
        const arr = []
        arr.push(inp.value)
        p.innerHTML += ` ${arr}`
        inp.value = ''
    } catch (error) {
        p.style = 'color: red'
        inp.value = ''
        p.innerHTML = error.message
    }
})