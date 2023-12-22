console.clear();
// Array.prototype.foo = function() {return 'bar';}

Object.defineProperty(Array.prototype, 'square', {value: function() {return this.map(a => a ** 2);}, enumerable: false});
Object.defineProperty(Array.prototype, 'cube', {value: function() {return this.map(a => a ** 3);}, enumerable: false});
Object.defineProperty(Array.prototype, 'sum', {value: function() {return this.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}, enumerable: false});
Object.defineProperty(Array.prototype, 'average', {value: function() {return this.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / this.length}, enumerable: false});
Object.defineProperty(Array.prototype, 'even', {value: function() {return this.filter((a) => (a % 2 === 0));}, enumerable: false});
Object.defineProperty(Array.prototype, 'odd', {value: function() {return this.filter((a) => (a % 2));}, enumerable: false});



console.log([1,2,3,4,5].odd())


//   console.log([1,2,3,4].add(0));

// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue,
//   );