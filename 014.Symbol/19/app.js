// На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу,
// которая подсчитывает сколько букв
// АааГГЦЦцТТтттА => А – 4; Г – 2; Ц – 3; Т – 5 

let str = 'АааГГЦЦцТТтттА'.toLowerCase().split('');
let a = 0;
let g = 0;
let c = 0;
let t = 0;

for (i = 0; i < str.length; i++) {
    if (str[i] == 'а') {
        a++;
    } else if (str[i] == 'г') {
        g++;
    } else if (str[i] == 'ц') {
        c++;
    } else if (str[i] == 'т') {
        t++;
    }
}

console.log('A - ' + `${a}`, 'Г - ' + `${g}`, 'Ц - ' + `${c}`, 'Т - ' + `${t}`);


