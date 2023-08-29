

// let n = +prompt();
let arr = ['array', 'sudb', 'hschool', 'bjbk'];

// for (let i = 0; i < n; i++) {
//     arr.push(prompt());
// }

let result = arr.filter(function(elem) {
    if (isNaN(elem) && (elem.startsWith('a') || elem.startsWith('h'))) {
        let res = [];
        return res += elem;
    }
})
console.log(result);