// Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина
// столбов одинаковая. По условию задачи даны 3 инпута и кнопка. По клику на
// кнопку вызывается функция, принимающая три параметра: количество столбов
// (≥ 1); расстояние между столбами (10 – 30 метров); ширина столба (10 – 50
// сантиметров). Рассчитайте расстояние между первым и последним столбом в
// сантиметрах

const btn = document.querySelector('button');
const count = document.querySelector('.count');
const dist = document.querySelector('.dist');
const width = document.querySelector('.width');
const p = document.querySelector('p');

btn.addEventListener('click', () => {
    try {
        if(count.value < 1) throw new Error('количество столбов is invalid')
        if(dist.value < 10 && dist.value > 30) throw new Error('расстояние между столбами is invalid')
        if(width.value < 0.1 && width.value > 0.5) throw new Error('ширина столба is invalid')
        let res = 0;
        if (count.value == 1) res = dist.value
        else res = (dist.value * (count.value - 1) + (count.value - 2) * width.value) * 100;
        p.textContent = res
    } catch (error) {
        alert(error.message)
    }
})