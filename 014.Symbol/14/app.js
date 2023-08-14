// На вход подается строка в виде электронной почты. Если строка содержит “@” и
// оканчивается на .com, .ru, то вывести true, иначе false

let str = 'nastya@mail';

if (str.includes('@') && (str.endsWith('.com') || str.endsWith('.ru'))) {
    console.log(true);
} else {
    console.log(false);
}

console.log(str.includes('@') && (str.endsWith('.com') || str.endsWith('.ru')) ? true : false);