// *Дана таблица c 1 колонкой. Под таблицей
// сделайте форму (инпут и кнопка), с помощью
// которой можно будет добавить нового
// значение в таблицу. 

const inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const tbl = document.querySelector('.table');

btn.addEventListener('click', () => {
    let tr = document.createElement('tr');
    tbl.appendChild(tr);
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = inp.value;
})