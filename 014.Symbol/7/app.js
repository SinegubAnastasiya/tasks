// На вход подается 1 слово. Необходимо преобразовать слово в хештег. Добавить
// проверку на ввод текстовых значений
// hSСhOol -> #hschool

let str = 'hSСhOol';

if (typeof str == 'string') {
    console.log('#' + str.toLowerCase());
} else {
    console.log('Error');
}

console.log(typeof str == 'string' ?  '#' + str.toLowerCase() : 'Error');