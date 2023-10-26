// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать функцию возвращающую новый
// массив из элементов, каждое значение которого имеет вид #name.
// [“hschool”, “company”] -> [“#hschool”, “#company”]

const n = +prompt()
let arr = []

function doArr(n) {
    for (let i = 0; i < n; i++) {
        arr.push(prompt())
    }
    return arr
}

function addHashtag(n) {
    let res = doArr(n)
    return res.map((el) => '#' + el)
}

const res = addHashtag(n)
console.log(res);