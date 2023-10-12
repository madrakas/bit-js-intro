

console.clear();

console.log([10, 2, 8, 4, 6]);
console.log([10, 2, 8, 4, 6].length);
console.log([10, 2, 8, 4, 6][0]);
console.log([10, 2, 8, 4, 6][1]);
console.log([10, 2, 8, 4, 6][2]);
console.log([10, 2, 8, 4, 6][3]);
console.log([10, 2, 8, 4, 6][4]);
console.log([10, 2, 8, 4, 6][5]); //undefined
console.log([10, 2, 8, 4, 6][-1]);//undefined

console.log([10, 2, 8, 4, 6].at(1)); // 2
console.log([10, 2, 8, 4, 6].at(4)); // 6
console.log([10, 2, 8, 4, 6].at(-1)); // 6
console.log([10, 2, 8, 4, 6].at(-2)); // 4

console.clear();

const a1 = [1, 2];
const a2 = [3, 4];
const a3 = [5, 6];
const a4 = [7, 8];
const a5 = [9, 10];

const a12 = a1.concat(a2);
const a123 = a1.concat(a2, a3);
const a124 = a1.concat(a2, a3, a4);
const a1245 = a1.concat(a2, a3, a4, a5);

const a12445 =a1.concat(a2, a3, a4, a4, a5);

console.log(a12);
console.log(a123);
console.log(a124);
console.log(a1245);
console.log(a12445); //[1,  2, 3, 4, 5, 6,  7, 8, 7, 8, 9, 10]

console.log('------------');
console.log([1,2].concat([3,4], [5,6], [7,8])); // <- [1, 2, 3, 4, 5, 6, 7, 8]


//indexOf, include
//console.clear();

//                    0       1         2       3
const students =["Jonas", "Petras", "Maryte", "Chuck"];

console.log(students.includes('Jonas')); //true
console.log(students.indexOf('Maryte')); // 2

//isarray
console.log(typeof 5);  //number
console.log(typeof 'asd');  //string
console.log(typeof true);  //boolean
console.log(typeof undefined);   //undefined
console.log(typeof null);  //object
console.log(typeof {});  //object
console.log(typeof []);  //object


console.log(Array.isArray(5));          // false
console.log(Array.isArray('asd'));      // false
console.log(Array.isArray(true));       // false`
console.log(Array.isArray(undefined));  // false
console.log(Array.isArray(null));       // false
console.log(Array.isArray({}));         // false
console.log(Array.isArray([]));         // true

// join

const abc = ['a', 'b', 'c', 'd', 'e'];

const abcJoin = abc.join();
const abcJoin2 = abc.join(' ');
const abcJoin3 = abc.join(', ');
const abcJoin4 = abc.join(' -==- ');

console.log(abcJoin, typeof abcJoin);
console.log(abcJoin2, typeof abcJoin);
console.log(abcJoin3, typeof abcJoin);
console.log(abcJoin4, typeof abcJoin);



// 10-05


//push


//console.clear();
const flowers = ['kardelis'];
console.log(flowers);

flowers.push('roze');
console.log(flowers);

flowers.push('tulpe');
console.log(flowers);

//flowers.pop();
//console.log(flowers);

//flowers.push('tulpe');
//console.log(flowers);
console.log(flowers);
console.log('----');
flowers.unshift('a'); 
console.log(flowers); // [ 'kardelis', 'roze', 'tulpe' ]  -> [ 'roze', 'tulpe' ]

flowers.push('tulpe');
console.log(flowers);

flowers.unshift('tulpe'); 
console.log(flowers); // [ 'kardelis', 'roze', 'tulpe' ]  -> [ 'tulpe', 'roze', 'tulpe', 'tulpe' ]

//console.clear();
console.log(flowers.reverse());

// slice

//console.clear();

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numbers46 = numbers.slice(4,6); //startas neimtinai, pabaiga imtinai
const numbers4 = numbers.slice(4);
const numbers25 = numbers.slice(2,5); 
console.log(numbers4);
console.log((numbers46));
console.log((numbers25));

// splice 
//numbers.splice(3);
numbers.splice(3, 3, 11, 12, 13, 14, 15); // [1, 2, 3, 4, 5, 6, 7, 8, 9] => [1, 2, 3, 11, 12, 13, 14, 15, 7, 8, 9]
console.log(numbers); // nuo kur pradėti, kiek trint, elementai įterpimui nuo kur pradėjom

numbers.splice()