
//ar normalus skaičius - baigtinė reikšmė
console.log(isFinite(5));
console.log(isFinite(3.14));
console.log(isFinite(-5));
console.log(isFinite(-3.14));
console.log(isFinite(0));
console.log(isFinite(9999999999999999999));


console.log(isFinite(NaN));       // false
console.log(isFinite(Infinity));  // false
console.log(isFinite(-Infinity)); // false
// object irgi ne




console.clear();
// const a = 7;
const a = {
    a1: 1,
    a2: 2, 
    a3: 3}
/*  const a = '123'; 
    const a = True;
    const a = [1, 2, 3];
    const a = {
        a1: 1,
        a2: 2, 
        a3: 3
    }
*/

if (isFinite(a)){
    console.log('Taip');
}   else {
    console.log('Ne');
}

console.clear();


console.log(Number.isInteger(-5));
const b = 1.2;

if (isFinite(b)) {
    if (Number.isInteger(b)){
        localStorage('Sveikasis skaičius');
    } else{
        console.log('Desimtainis skaičius');
    }
} 

console.clear();

console.log(Number.parseInt(false));  // NaN
console.log(Number.parseInt([]));     // NaN
console.log(Number.parseInt(''));     // NaN
console.log(Number.parseInt('penki'));// NaN 
console.log(Number.parseInt('123'));  // 123
console.log(Number.parseInt('asd123')); // NaN
console.log(Number.parseInt('123asd')); // 123
console.log(Number.parseInt('123asd456'));  // valgo iki pirmos klaidos ->123
console.log(parseInt('111'));          // 111
console.log(parseInt('Infinity')); //NaN
console.log(parseInt('11.1'));     


//console.log('a', isInteger(1));

console.log('-------------');

console.log(parseFloat(''));
console.log(parseFloat('789'));
console.log(parseFloat('789.101'));
console.log(parseFloat('-789.123sdfdsf'));
console.log(parseFloat('Infinity')); // returns Infinity
console.log(parseFloat(''));

console.log(isNaN(NaN)); // true


const kaina = 3.14;
const keistasSkaicius = 0.1 + 0.2;
console.log(kaina.toFixed(1));
console.log(kaina.toFixed(2));
console.log(kaina.toFixed(5));
console.log(keistasSkaicius);

const keistasSkaicius2 = keistasSkaicius.toFixed(4);
console.log(keistasSkaicius2); //  3.1400

const keistasSkaicius3 = parseInt(keistasSkaicius2)
console.log(keistasSkaicius3); // 0

const keistasSkaicius4 = parseFloat(keistasSkaicius2)
console.log(keistasSkaicius4); // 0.3

const keistasSkaicius5 = + '1.23'; // gamina skaičių 123 kaip ir parseFloat. Skiriasi tik infinty interpretavimas
console.log(keistasSkaicius5); 

const keistasSkaicius6 = +keistasSkaicius;
console.log(keistasSkaicius6);

const c = 6.9999999999999999;  
console.log(c); 
console.log(c.toFixed(5)); // 7 suapvalino!

const d = 5.6789;
console.log(d.toFixed(6));
console.log(d.toFixed(5));
console.log(d.toFixed(4));
console.log(d.toFixed(3));

const e = 5.6789;
console.log(e.toFixed(6));
console.log(e.toFixed(5));
console.log(e.toFixed(4));
console.log(e.toFixed(3));

