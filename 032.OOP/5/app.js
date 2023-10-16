// Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем
//     замены букв исходного слова или фразы). Создать функцию для вывода ряда true,
//     если слова являются анаграммами. Добавить проверки на ввод

// class Anagram {
//     firstWord;
//     secondWord;

//     constructor (first, second) {
//         this.firstWord = first;
//         this.secondWord = second;
//     }

//     checkWord = () => {
//         try {
//             if (!this.firstWord || !this.secondWord) throw new Error('No words')
//             if (!isNaN(this.firstWord) || !isNaN(this.secondWord)) throw new Error('It is not a string')
//             if (this.firstWord.split('').sort().join('') == this.secondWord.split('').sort().join('')) return true
//             else return false
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const anagram = new Anagram('пила', 'липа')
// console.log(anagram.checkWord());

// class Anagram {
//     firstWord;
//     secondWord;

//     checkWord = () => {
//         try {
//             if (!this.firstWord || !this.secondWord) throw new Error('No words')
//             if (!isNaN(this.firstWord) || !isNaN(this.secondWord)) throw new Error('It is not a string')
//             if (this.firstWord.split('').sort().join('') == this.secondWord.split('').sort().join('')) return true
//             else return false
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const anagram = new Anagram()
// anagram.firstWord = 'пила';
// anagram.secondWord = 'липа';
// console.log(anagram.checkWord());

// class Anagram {
//     firstWord = 'пила';
//     secondWord = 'липа';

//     checkWord = () => {
//         try {
//             if (!this.firstWord || !this.secondWord) throw new Error('No words')
//             if (!isNaN(this.firstWord) || !isNaN(this.secondWord)) throw new Error('It is not a string')
//             if (this.firstWord.split('').sort().join('') == this.secondWord.split('').sort().join('')) return true
//             else return false
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// }

// const anagram = new Anagram()
// console.log(anagram.checkWord());

class Anagram {
    checkWord = (firstWord, secondWord) => {
        try {
            if (!firstWord || !secondWord) throw new Error('No words')
            if (!isNaN(firstWord) || !isNaN(secondWord)) throw new Error('It is not a string')
            if (firstWord.split('').sort().join('') == secondWord.split('').sort().join('')) return true
            else return false
        } catch (error) {
            console.log(error.message);
        }
    }
}

const anagram = new Anagram()
console.log(anagram.checkWord('пила', 'липа'));