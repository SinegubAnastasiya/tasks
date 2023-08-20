// . [1, 2, 3, 4, 5]. Выведите каждый элемент массива 3 любыми циклами

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let arr_1 = [1, 2, 3, 4, 5];
let i = 0;

while (i < arr_1.length) {
    console.log(arr_1[i]);
    i++;
}

let arr_2 = [1, 2, 3, 4, 5];
for (let i of arr_2) {
    console.log(i);
}