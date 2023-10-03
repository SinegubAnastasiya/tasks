// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута.
// Проверки на ввод. Обработать ошибки

const btn = document.querySelector('.button');
const inp = document.querySelector('input');

btn.addEventListener('click', () => {
    try {
        if (inp.value) alert(inp.value)
        throw new Error ('Input не заполнен')
    } catch (error) {
        alert(error.message);
    }
})
