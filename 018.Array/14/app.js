// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из элементов, каждое
// значение которого имеет вид #name. map, forEach
// [“hschool”, “company”] -> [“#hschool”, “#company”]

const n = +prompt();
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt());
}

//map
let res = arr.map(function(elem) {
    return `#${elem}`;
})
console.log(res);

//forEach
let nArr = [];
arr.forEach(function(elem) {
    nArr.push('#' + elem);
})
console.log(nArr);

