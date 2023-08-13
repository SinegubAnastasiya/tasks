// ‘HTML JavaScript PHP’ преобразовать в "HTML-JAVASCRIPT-PHP"

const str = 'HTML JavaScript PHP';

console.log(str.toUpperCase().replaceAll(' ', '-'));

console.log(str.split(' ').join('-').toUpperCase);