// Заполнять массив числами бесконечно до тех пор, пока длина массива не будет
// равна 5. Вывести массив в консоль (цикл for, while)

let arr = [];

// for (; ;) {
//     arr.push(prompt());
//     if (arr.length === 5) {
//         break;
//     }
// }
// console.log(arr);

while (true) {
    arr.push(prompt());
    if (arr.length === 5) {
        break;
    }
}
console.log(arr);