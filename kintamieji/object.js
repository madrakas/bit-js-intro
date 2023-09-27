/* 
Object - objektas 
*/

console.clear();

// vartotojas: vardas, amzius, ar vedęs

const jonasData = ['Jonas', 99, true];
const maryteData = ['Marytė', 88, false];

const jonasName = jonasData[0];
const jonasAge = jonasData[1];
const jonasIsMarried = jonasData[2];

const maryteName = maryteData[0];
const maryteAge = maryteData[1];
const maryteIsMarried = maryteData[2];

console.log(jonasName, jonasAge, jonasIsMarried);
console.log(maryteName, maryteAge, maryteIsMarried);

// Key: value
const jonas = {
    name: 'Jonas',
    age: 99,
    isMarried: true
};

console.log('Jonas:', jonas);
console.log(jonas['name']);
console.log(jonas['age']);
console.log(jonas['isMarried']);

console.log(jonas.name, jonas.age, jonas.isMarried, );

jonas.age++;
console.log(jonas);

jonas.isMarried = false;
console.log(jonas);

jonas.name = 1;
console.log(jonas);

const arr = [1, 2, 3, 4];
console.log (arr);

arr[0] = 20;
console.log (arr);

let a = 1;
let b = a;

console.log('a', a, 'b', b);
a = 10;
console.log('a', a, 'b', b);

const c = [1, 2];

const d = c;

console.log('c', c, 'd', d);

c[0] = 111;
console.log ('c', c, 'd', d);

d[0] = 333;
console.log ('c', c, 'd', d);
const e = {
    name: 'Edgaras',
    age: 99
}

const e1 = e.name;
const f = e;

e.name = 'Fiona';
console.log('e:', e);
console.log('f:', f);
console.log('e1:', e1);
