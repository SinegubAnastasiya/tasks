// Вы вводите значение с клавиатуры. Если значение от 0 до 18 «детство», от 19 до 40 –
// молодость, от 41 до 100 – зрелость, в противном случае – некорректный ввод

let number = +prompt('Введите значение');

if (number >= 0 && number <= 18) {
    console.log ('детство');
} else if (number >= 19 && number <= 40) {
    console.log ('молодость');
} else if (number >= 41 && number <= 100) {
    console.log ('зрелость');
} else {
    console.log ('некорректный ввод'); 
}