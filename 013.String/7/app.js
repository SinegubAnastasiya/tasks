// На вход программе подаётся строка. Замените все @ на '!' (2 способа)

const str = prompt();

console.log(str.replaceAll('@','!'));

console.log(str.split('@').join('!'));