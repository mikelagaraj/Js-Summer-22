let num1 = 10;
// num1 + 1 same as num1++
num1++;  //num1 = num1 +1;


num1--; // post-decrement
--num1; // pre-decrement

let num2 = 20;
let res2 = num2++ - num2;   // sub, assign , post-increment
/*
        let res2 = num2++ -num2
        let res2 = num2 - num2;   // 0
        let res2 - 0;             // res2 = 0

        num2++                    21
    */

console.log(`res = ${res2}`);    // 0
console.log(`res = ${num2}`);    // 21
