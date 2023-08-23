// У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
// массив, заполненный только числами первоначального массива

let arr = [2, 'ndfn', 5, 'fmgnn', 'fjn', 6, true];
let nArr = [];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        nArr.push(arr[i]);
    }
}
console.log(nArr);