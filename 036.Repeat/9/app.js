// // Отобразить в div массив из 15 рандомных значений от 0 до 100. Необходимо
// // распознать по какому из значений контейнера производится событие клика. Если
// клик происходит, то удалить данное значение из массива в div


const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    const div_1 = document.querySelector('.first')
    const div_2 = document.querySelector('.second')
    const arr = []
    const newArr = []
    for (let i = 0; i < 15; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }
    
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li')
        li.innerHTML = arr[i]
        div_1.appendChild(li)
    }

    div_1.addEventListener('click', (event) => {
        div_1.removeChild(event.target)
        newArr.push(event.target.textContent)
        div_2.innerHTML = newArr
    })
})


    
