// Необходимо отобразить кнопку с надписью «Нажми на меня» и инпут со
// значением по-умолчанию «+375(хх)ххх-хх-хх». По клику на кнопку заменить
// значение инпута на «+375(29)111-11-11»

const btn = document.querySelector('.button');
const inp = document.querySelector('input');

btn.addEventListener('click', () => {
    try {
        inp.value = '+375(29)111-11-11';
    } catch (error) {
        alert(error.message)
    }
})