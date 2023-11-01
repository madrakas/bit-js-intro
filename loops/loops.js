console.clear();

const marks = [10, 2, 8, 4, 6];

// FOR
let sumFor = 0;

for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    sumFor += mark;
}

console.log('FOR: sum =', sumFor );

// FOR-OF
let sumForOF = 0;

for (const mark of marks){
    sumForOF += mark;
}

console.log('FOR-OF: sum =', sumForOF );

// WHILE

let sumWhile = 0;
let iWhile = 0;


/* let x = 0;
for (; x < marks.length;){
    x++;
} */

while (iWhile < marks.length){
    const mark = marks[iWhile];
    sumWhile += mark;
    iWhile++;
}

let sumDoWhile = 0;
let iDoWhile = 0;

do {
    const mark = marks[iDoWhile];
    sumDoWhile += mark;
    iDoWhile++;
} while (iDoWhile < marks.length);

console.log('FOR-DO-WHILE: sum =', sumDoWhile);

