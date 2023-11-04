class WordString {
    str;
    constructor(str) {
        this.str = str
    }

    reverseString() {
        return this.str.split('').reverse().join('')
    }
}

const wordString = new WordString('string')
console.log(wordString.reverseString());