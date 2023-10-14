// Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел,
// разность, произведение, частное. 2 числа передаются в класс, далее вызываеются
// соответствующие функции. Добавить проверки на ввод

// class Calculator {
//     a = 10
//     b = 20
//     getSum = () => {
//         const res = this.a + this.b
//         return res
//     }

//     getMinus = () => {
//         const res1 = this.a - this.b
//         return res1
//     }

//     getMultiply = () => {
//         const res2 = this.a * this.b
//         return res2
//     }

//     getDevide = () => {
//         const res3 = this.a / this.b
//         return res3
//     }
// }

// const calculator = new Calculator()
// console.log(calculator.getSum(), calculator.getMinus(), calculator.getMultiply(), calculator.getDevide());


// class Calculator {
//         a;
//         b;
//         getSum = () => {
//             const res = this.a + this.b
//             return res
//         }
    
//         getMinus = () => {
//             const res1 = this.a - this.b
//             return res1
//         }
    
//         getMultiply = () => {
//             const res2 = this.a * this.b
//             return res2
//         }
    
//         getDevide = () => {
//             const res3 = this.a / this.b
//             return res3
//         }
//     }

//     const calculator = new Calculator()
//     calculator.a = 10
//     calculator.b = 20
//     console.log(calculator.getSum(), calculator.getMinus(), calculator.getMultiply(), calculator.getDevide());

// class Calculator {
//     a = 10
//     b = 20
//     getSum = () => {
//         const res = this.a + this.b
//         return res
//     }

//     getMinus = () => {
//         const res1 = this.a - this.b
//         return res1
//     }

//     getMultiply = () => {
//         const res2 = this.a * this.b
//         return res2
//     }

//     getDevide = () => {
//         const res3 = this.a / this.b
//         return res3
//     }
// }

// const calculator = new Calculator()
// console.log(calculator.getSum(), calculator.getMinus(), calculator.getMultiply(), calculator.getDevide());


// class Calculator {
//         getSum = (a, b) => {
//             const res = a + b
//             return res
//         }
    
//         getMinus = (a, b) => {
//             const res1 = a - b
//             return res1
//         }
    
//         getMultiply = (a, b) => {
//             const res2 = a * b
//             return res2
//         }
    
//         getDivide = (a, b) => {
//             const res3 = a / b
//             return res3
//         }
//     }

// const calculator = new Calculator()
// console.log(calculator.getSum(10, 20));
// console.log(calculator.getMultiply(10, 20));
// console.log(calculator.getMinus(10, 20));
// console.log(calculator.getDivide(10, 20));

class Calculator {
    myA;
    myB;

    constructor(a, b) {
        this.myA = a;
        this.myB = b;
    }

    getSum = () => {
        const res = this.myA + this.myB
        return res
    }

    getMinus = () => {
        const res1 = this.myA - this.myB
        return res1
    }

    getMultiply = () => {
        const res2 = this.myA * this.myB
        return res2
    }

    getDivide = () => {
        const res3 = this.myA / this.myB
        return res3
    }
}

const calculator = new Calculator(10, 20)
console.log(calculator.getSum());
console.log(calculator.getMultiply());
console.log(calculator.getMinus());
console.log(calculator.getDivide());

    