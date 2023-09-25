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