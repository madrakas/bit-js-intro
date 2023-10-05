console.clear();

const amzius = 19;
const limitas = 18;

let zinute1 = '';

//jeigu pilnametis -> uzeik
// jeigu nepilnametis -> sorry


if (amzius < limitas) {
    zinute1 = 'sorry...';
}else{
    zinute1 = 'Uzeik';
}

console.log('>>>', zinute1);



///////////////////////////////////////

let zinute2 = 'Uzeik';
if (amzius < limitas) {
    zinute2 = 'sorry...';
}

console.log('>>>', zinute2);

//// ternary - trejybė

const zinute3 = amzius < limitas ? 'Sorry...' : 'Uzeik';

console.log('>>>', zinute3);

// bloga praktika
//pratestas ternary

const q1 = 0 > 1 ? 2: 3;
console.log('q1: ', q1);

const q2 = 0 > 1 
                ? 2
                : 3;
console.log('q2: ', q2);


const q3 = 0 > 1
                ? 2
                : 3;
console.log('q3: ', q3);

const q4 = 0 > 1 
                ? 2
                    ? 3
                    : 4
                : 5;
console.log('q4: ', q4);


const q5 = 0 < 1 
                ? 2   //KLAUSIMAS YRA 2. Visi skaičiai atsako true išskyrus 0
                    ? 3
                    : 4
                : 5;
console.log('q5: ', q5);

const q6 = 0 < 1 
                ? 2   //KLAUSIMAS YRA 2. Visi skaičiai atsako true išskyrus 0
                    ? 3
                    : 4
                : 5
                    ?6
                    : 7;
console.log('q6: ', q6);

// žodžiu ternary naudojam tik vieno lygio, kitu atveju kentės nosis

