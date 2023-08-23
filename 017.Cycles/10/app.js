// Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите только уникальные
// значения массива -> [1, 5] (for)

let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i+1] && arr[i] !== arr[i-1]) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);