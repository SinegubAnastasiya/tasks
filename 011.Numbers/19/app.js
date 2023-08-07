// Даны три числа a, b, c. Напишите программу, которая находит корни квадратного
// уравнения
// ax2 + bx + c = 0
// Если уравнение имеет два корня, то следует вывести их в порядке возрастания.

let a = +prompt('Введите a: ');
let b = +prompt('Введите b: ');
let c = +prompt('Введите c: ');
let D = b ** 2 - 4*a*c;
let x1 = (-b + Math.sqrt(D)) / (2*a);
let x2 = (-b - Math.sqrt(D)) / (2*a);
let myarray = [x1, x2];

if (D > 0) {
    console.log (myarray.sort((x1, x2) => x1-x2));
} else if (D === 0) {
    console.log (-b / (2*a));
} else {
    console.log ('Корней нет');
}