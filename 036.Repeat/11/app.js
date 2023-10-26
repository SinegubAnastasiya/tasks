// Реализуйте класс WordString, который содержит: конструктор со входной строкой;
// метод ReverseString(). Ваша задача перевернуть исходную строку

class WordString {
    str;

    // constructor(str) {
    //     this.str = str
    // }

    setStr(str) {
        this.str = str
    }

    getStr() {
        return this.str
    }

    ReverseString() {
        return this.str.split('').reverse().join('')
    }
}

const wordString = new WordString()
wordString.setStr('string')
console.log(wordString.ReverseString());

