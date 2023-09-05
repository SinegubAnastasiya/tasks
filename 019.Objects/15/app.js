// На входе массив чисел. На основе этого массива сформировать объект, где ключ –
// число массива, значение – true/false. True – число четное, false – нечетное 

let arr = [2, 5, 3, 7, 8, 12];
const obj = {}

for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
        obj[arr[i]] = true;
    } else {
        obj[arr[i]] = false;
    }
}
console.log(obj);