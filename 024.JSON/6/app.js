// Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать true, если можно построить треугольник со
// сторонами заданной длины, и false в любом другом случае. Треугольник
// существует только тогда, когда сумма двух его сторон больше третьей. Требуется
// сравнить каждую сторону с суммой двух других. Если хотя бы в одном случае
// сторона окажется больше либо равна сумме двух других, то треугольника с
// такими сторонами не существует.

let a = 4, b = 3, c = 2;

function isValid(a, b, c) {
    if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) return true
    else throw new Error('Введите целые числа')
}

function getTriangle(a, b, c) {
    try {
        isValid(a, b, c);
        if (a + b > c && a + c > b && b + c > a) {
            return true
        }
        else throw new Error('Треугольника с такими сторонами не существует')
    } catch (error) {
        return error.message
    }
}

let result = getTriangle(a, b, c);
console.log(result);