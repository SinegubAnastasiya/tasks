// По двойному клику на кнопку изменить цвет кнопки

const btn = document.querySelector('button');

btn.addEventListener('dblclick', () => {
    btn.style = 'background-color: red';
})