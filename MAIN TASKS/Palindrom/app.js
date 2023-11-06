const str = 'шалаш';

if (str === str.split('').reverse().join('')) {
    console.log('Это палиндром');
} else {
    console.log('Это не палиндром');
}

