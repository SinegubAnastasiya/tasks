// Реализуйте класс MathСalculation. В него передается число n – количество
// элементов массива. На основании числа формируется динамический массив из n
// элементов внутри класса. Создать функцию для подсчета всех четных чисел
// массива. Добавить проверки на ввод

// class MathСalculation {
//     n;
//     arr = []

//     constructor (n) {
//         this.n = n
//     }

//     getArr = () => {
//         for (let i = 0; i < this.n; i++) {
//            this.arr[i] = i
//         }
//         return this.arr
//     }

//     getSum = () => {
//         let sum = 0
//         for (let i = 0; i < this.arr.length; i++) {
//             if (this.arr[i] % 2 == 0) sum += this.arr[i]
//         }
//         return sum
//     }
// }

// const mathcalculation = new MathСalculation(5)
// console.log(mathcalculation.getArr(), mathcalculation.getSum());

class MathСalculation {
    n;
    arr = []

    constructor (n) {
        this.n = n
    }

    getArr = () => {
        for (let i = 0; i < this.n; i++) {
           this.arr[i] = i
        }
        return this.arr
    }

    getSum = () => {
        let sum = 0
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] % 2 == 0) sum += this.arr[i]
        }
        return sum
    }
}

const mathcalculation = new MathСalculation()

console.log(mathcalculation.getArr(), mathcalculation.getSum());