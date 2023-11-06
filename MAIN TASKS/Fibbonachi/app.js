let firstNum = 0;
let secondNum = 1;
const n = 10;
let arr = [firstNum, secondNum];
let sum = 0;

for (let i = 3; i < n; i++) {
   sum = firstNum + secondNum;
   arr.push(sum);
   firstNum = secondNum;
   secondNum = sum;
}
console.log(arr);