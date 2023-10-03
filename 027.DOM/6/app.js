// Необходимо отобразить кнопку и инпут со значением по умолчанию. По клику на
// кнопку заменить значение инпута

const btn = document.querySelector('.button');
const inp = document.querySelector("input");

btn.addEventListener('click', () => {
    try {
        if (!inp.value) throw new Error('Input is incorrect')
        if (inp.value !== '!!!') throw new Error('Input is incorrect')
        inp.value = '???';
    } catch (error) {
        alert(error.message)
    }
})
