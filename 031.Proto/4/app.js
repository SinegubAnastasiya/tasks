// По условию задачи даны инпут и кнопка. Необходимо преобразовать строку в
// CamelCase (примерСтрокиВCamelCase )

const btn = document.querySelector('button')
const inp = document.querySelector('input')
const p = document.querySelector('p')

btn.addEventListener('click', () => {
    try {
        if (!inp.value) throw new Error('Input is empty')
        const { value } = inp
        let res = '';
        const arr = value.split(' ')
        for (let i = 0; i < arr.length; i++) {
            res += arr[i][0].toUpperCase() + arr[i].slice(1)
        }

        p.textContent = res[0].toLowerCase() + res.slice(1)
    } catch (error) {
        alert(error.message)
    }
})


