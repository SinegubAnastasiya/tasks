// Дополнить класс Validator. Добавить метод isDate для проверки на дату.

// class Validator {
//     date;

//     constructor (date) {
//         this.date = date
//     }

//     isDate = () => {
//         try {
//             if (!/^[0-3][0-9]\.[0-1][0-9]\.[1-2][0-9][0-9][0-9]/gm.test(this.date)) throw new Error('Date is not valid')
//             return true
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const validator = new Validator('17.10.2023')
// console.log(validator.isDate());

// class Validator {
//     date = '17.10.2023';

//     isDate = () => {
//         try {
//             if (!/^[0-3][0-9]\.[0-1][0-9]\.[1-2][0-9][0-9][0-9]/gm.test(this.date)) throw new Error('Date is not valid')
//             return true
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const validator = new Validator()
// console.log(validator.isDate());

// class Validator {
//     date;

//     isDate = () => {
//         try {
//             if (!/^[0-3][0-9]\.[0-1][0-9]\.[1-2][0-9][0-9][0-9]/gm.test(this.date)) throw new Error('Date is not valid')
//             return true
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const validator = new Validator()
// validator.date = '17.10.2023'
// console.log(validator.isDate());

class Validator {
    isDate = (date) => {
        try {
            if (!/^[0-3][0-9]\.[0-1][0-9]\.[1-2][0-9][0-9][0-9]/gm.test(date)) throw new Error('Date is not valid')
            return true
        } catch (error) {
            console.log(error.message);
        }
    }
}

const validator = new Validator()
console.log(validator.isDate('17.10.2023'));