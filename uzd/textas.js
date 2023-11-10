console.clear();
console.log('Labas');

const tekstas1 = 'vasarrra';
const tekstas2 = 'pavasaris';
const tekstas3 = 'labas rytas';
const tekstas4 = 'pipiriukai';

//kuri raidė dažniausia


function commonletter(tekstas){
    const letters =[];
    for (let i = 0; i < tekstas.length; i++) {
        const letter = tekstas[i];
        if (!letters.includes(letter) ){
            letters.push(letter);
        }
    }    
    const lettersCounts = [];
    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        let letterCount = 0;
        for (let i2 = 0; i2 < tekstas.length; i2++) {
            if (letter === tekstas[i2]){
                letterCount++;
            }
        }
        lettersCounts.push(letterCount);
    }
    return lettersCounts;

    // rast max Nr
    // eit per lettersount ir lyginti ar = max Nr
}
// console.log(commonletter(tekstas1));


const abc = {};

/* abc['a'] = 3;
abc['s'] = 1;
abc['v'] = 1;
abc['r'] = 1;
 */

for (const letter of tekstas1){
    if (abc[letter]){
        abc[letter] += 1;
    }else{
        abc[letter] = 1;
    }
}
    
console.log(abc);

let maxCount = 0;

for (const letter in abc){
    console.log(letter, abc[letter]);
    if (abc[letter] > maxCount) {
        maxCount =  abc[letter];

    }   
}

let maxLetters = [];


for (const letter in abc){
    if (abc[letter] === maxCount) {
        maxLetters.push(letter);
    }   
}

console.log(maxLetters);