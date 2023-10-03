// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое

const btn = document.querySelector('.button');
const inp = document.querySelector('input');
const p = document.querySelector('p');
const arr = [];

// btn.addEventListener('click', () => {
//     try {
//         if (!inp.value) throw new Error('Input is empty')
//         if (!p.textContent) {
//             p.innerHTML += inp.value;
//         } else {
//             p.innerHTML += ',' + inp.value;
//         }
//     } catch (error) {
//         alert(error.message)
//     }
// })

btn.addEventListener('click', () => {
    try {
        if (!inp.value) throw new Error('Input is empty')
        arr.push(inp.value)
        p.innerHTML = arr
        
    } catch (error) {
        alert(error.message)
    }
})
