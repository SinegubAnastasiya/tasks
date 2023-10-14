// Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод upperEvery, который делает заглавной первую
// букву каждого слова этой строки.

// class WordString {
//     str;

//     constructor (a) {
//         this.str = a
//     }

//     reverseString = () => {
//         return this.str.split('').reverse().join('')
//     }

//     upperFirst = () => {
//         return this.str[0].toUpperCase() + this.str.slice(1)
//     }

//     upperEvery = () => {
//         // let newStr = [];
//         // let str1 = this.str.split(' ');
//         // for (let i = 0; i < str1.length; i++) {
//         //     newStr.push(str1[i][0].toUpperCase() + str1[i].slice(1))
//         // }
//         return this.str.split(' ').map((el) => {
//             if(!el.length) return el
//             return el[0].toUpperCase() + el.slice(1)
//         }).join(' ')
//     }
// }

// const wordstring = new WordString('hello, world')
// console.log(wordstring.reverseString());
// console.log(wordstring.upperFirst());
// console.log(wordstring.upperEvery());

// class WordString {
//     str;

//     reverseString = () => {
//         return this.str.split('').reverse().join('')
//     }

//     upperFirst = () => {
//         return this.str[0].toUpperCase() + this.str.slice(1)
//     }

//     upperEvery = () => {
//         return this.str.split(' ').map((el) => {
//             if (!el.length) return el
//             return el[0].toUpperCase() + el.slice(1)
//         }).join(' ')
//     }
// }

// const wordstring = new WordString('')
// wordstring.str = 'hello, world';
// console.log(wordstring.reverseString());
// console.log(wordstring.upperFirst());
// console.log(wordstring.upperEvery());

// class WordString {
//     str = 'hello, world';

//     reverseString = () => {
//         return this.str.split('').reverse().join('')
//     }

//     upperFirst = () => {
//         return this.str[0].toUpperCase() + this.str.slice(1)
//     }

//     upperEvery = () => {
//         return this.str.split(' ').map((el) => {
//             if (!el.length) return el
//             return el[0].toUpperCase() + el.slice(1)
//         }).join(' ')
//     }
// }

// const wordstring = new WordString()
// console.log(wordstring.reverseString());
// console.log(wordstring.upperFirst());
// console.log(wordstring.upperEvery());

class WordString {
    // str = 'hello, world';

    reverseString = (str) => {
        return str.split('').reverse().join('')
    }

    upperFirst = (str) => {
        return str[0].toUpperCase() + str.slice(1)
    }

    upperEvery = (str) => {
        return str.split(' ').map((el) => {
            if (!el.length) return el
            return el[0].toUpperCase() + el.slice(1)
        }).join(' ')
    }
}

const wordstring = new WordString()
console.log(wordstring.reverseString('hello, world'));
console.log(wordstring.upperFirst('hello, world'));
console.log(wordstring.upperEvery('hello, world'));




