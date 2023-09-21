// На входе массив. Реализуйте две функции. Первая проверяет, что все элементы
// массива положительные числа. Вторая функция возвращает массив, в котором
// каждое положительное число умножено на 2. Если результат проверки - true,
// вызывайте вторую функцию и возвращайте полученный массив.

const arr = [2, 6, 8, 12, 5];

function isPositive(arr) {
   let res = arr.every(function(elem) {
        if (elem > 0) {
            return true;
        } else {
            return false;
        }
   })
   return res;
}

function getMultiply(arr) {
    let nArr = [];
    let result = isPositive(arr);
    if (result === true) {
        for (let i = 0; i < arr.length; i++) {
            nArr.push(arr[i] * 2);
        }
        return nArr;
    }
}

const result = getMultiply(arr);
console.log(result);

