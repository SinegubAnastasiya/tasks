// По нажатию на кнопку поменять местами значения 2 инпутов

const btn = document.querySelector('button')
const first = document.querySelector('.first')
const second = document.querySelector('.second')

btn.addEventListener('click', () => {
    try {
        if(!first.value || !second.value) throw new Error ('Input is empty')
        let res = first.value
        first.value = second.value
        second.value = res
    } catch (error) {
        alert(error.message)
    }
})