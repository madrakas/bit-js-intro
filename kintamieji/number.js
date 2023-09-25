/* Java kintamieji

- number (teigiami/neigiami, sveikieji/desimtainiai, normalus/nenormalus)
- string 
- boolean
- array 
- object */

const amzius=99;
let pinigine=0;
var minusas = -7.56;

const x1 = 1;
const x2 = 2;
const x3 = 3;
const x4 = 4;
const x5 = 5;
const infinity1 = 1 / 0;

console.log(x5);
console.log(pinigine);
console.log(amzius);

const sum2 = x1 + x2;
const diff2 = x1 - x5;
const mltp= x5 * x3;
const div2= x4 / x3;
const root= 9 ** 0.5;

console.log( "x1+x2=" , sum2);
console.log( "x1-x5=" , diff2);
console.log( "x5*x3=" , mltp);
console.log( "x4/x3=" , div2);
console.log( "9 ** 0.5=" , root);
console.log( "Infinity1", infinity1);
console.log( "Div by inf" , 1000/infinity1);
console.log( "Inf times Inf" , infinity1*infinity1);
console.log( "1/3=" , 1/3);

const begalybe= Infinity;
const minusBegalybe= -Infinity;

const liekana = 7 % 5;
console.log( "liekana=" , liekana);

let wallet = 0;
wallet = + 5;

wallet += 5;
wallet += 5;
wallet += 5;
console.log('wallet: ', wallet);

wallet = wallet -2;

wallet -= 2;
wallet -= 2;
wallet -= 2;
console.log('wallet: ', wallet);

wallet = wallet *4;
console.log('wallet: ', wallet);

wallet += 2;
console.log('wallet: ', wallet);

wallet /= 5;
console.log('wallet: ', wallet);

const skaicius = 17;
const daliklis = 5;
const remain = skaicius % daliklis;
console.log(remain);
const sveikaDalis = (skaicius - remain) / daliklis;
console.log(sveikaDalis);

 //console.log(sveikaDalis, '*', daliklis, "")


 console.clear();

 let index = 0;
 console.log('index: ', index);

 index = index + 1;
 console.log('index', index);

 index += 1;
 console.log('index', index);

 index++;
 console.log('index', index);

 ++index;
 console.log('index', index);


 let i = 0;
 console.log(i); // 0

 console.log(i++); // 0 -> 1
 console.log(i);   // 1
 console.log(i++); // 1 -> 2
 console.log(i);   // 2


 console.log('-------------');

 let i2 = 0;
 console.log(++i2);
 console.log(++i2);
 console.log(++i2);
 console.log(++i2);
 console.log(++i2);

 console.log('-------------');

 let m = 0;
 console.log(m--); // 0 -> -1 output 0
 console.log(m--); // -1 -> -2
 console.log(m--); // -2 -> -3
 console.log(m--); // -3 -> -4
 console.log(m--); // -4 -> -5

 console.log(m); // -5

 m = 0;
 console.log(--m); // 0 -> -1 output -1
 console.log(--m); // -1 -> -2
 console.log(--m); // -2 -> -3
 console.log(--m); // -3 -> -4
 console.log(--m); // -4 -> -5

 console.log(m); // -5

 let x = 1;
x += -1;
console.log(x);

let a1 = 5;
x= 7;

//x = x + ++a1; //13
//x = x++ +a1;   //12

//x = (x++) + a1; //12 x1 = 8
x = x + (++a1);  //13 x1 = 8


console.log(x);