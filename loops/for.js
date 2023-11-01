/*
FOR - "for" ciklas

*/

 console.clear();

let a = 1;

console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log('aa',++a);
 
console.log('START');
for (let i = 0; i < 5; i++){
    console.log(i);
}
console.log('PAUSE');

eilute = ['Goda', 'Guste', 'Bartas'];

for (let i = 0; i < eilute.length; i++){
    console.log(eilute[i], i);
}

console.log('++i:');
for (let i = 0; i < 5; ++i){
    console.log(i);
}
console.log('i++:');
for (let i = 0; i < 5; i++){
    console.log(i);
}

console.log('FINISH');

// intervalas nuo 3 iki 8 yra 3 4 5 6 7 8 

const start = 3;
const finish = 8;
let numberSequence = '';

for (let f = start; f <= finish ; f++){
  if (f===start){
    numberSequence += f;
  }else{
    numberSequence += ', ' + f; 
  }
}

console.log(`Skaičiai intervale nuo ${start} iki ${finish} imtinai yra: ${numberSequence}.`);

numberSequence = '';
for (let f = start; f < finish ; f++){
    numberSequence += f + ', ';
}
  
console.log(`Skaičiai intervale nuo ${start} iki ${finish} imtinai yra: ${numberSequence}${finish}.`);

numberSequence = '';
for (let f = start + 1; f <= finish ; f++){
    numberSequence += ', ' + f;
}
  
console.log(`Skaičiai intervale nuo ${start} iki ${finish} imtinai yra: ${start}${numberSequence}.`);


for (let i = 10; i >= 0; i--){
    console.log(i);
}

for (let i = 0; i <= 10; i++){
    if (i % 2 === 0){
        console.log(i, 'lyginis');
    }else{
        console.log(i, 'nelyginis');
    }
   
}

let i = 0;

for (let i = 1; i<= 10; ) {
    console.log(i,'ciklas');
    i += 2;
}

console.log(i, 'uz ciklo');

function arTestiCkla(index){
    if (index <= 10) {
        return true;
    }else{
        return false
    }
}

for (let i = 0; arTestiCkla(i); i += 2 ) {
    console.log(i,'ciklas');
}


const zodis = 'Labas rytas';
zodisLen = zodis.length;

for (let i = 0; i < zodisLen; i++) {
    console.log(`Raidė: ${zodis[i]}`);
}

console.clear();
const marks  = [10, 2, 8, 4, 6];

let totalSum = 0;
const amount = marks.length;

for (let i = 0; i < amount; i++){
    const pazymys = marks[i];
    totalSum += marks[i];
    console.log(`${i}, ${pazymys}, ${totalSum}`);
}

const average = totalSum /amount;
console.log(average);

