console.clear();
console.log('labas'.length);
console.log('     '.length);
console.log('\n\'\\'.length);

console.log('labas'[0],'labas'.at(0));  //l            //l       
console.log('labas'[1],'labas'.at(1));  //a            //a   
console.log('labas'[2],'labas'.at(2));  //b            //b   
console.log('labas'[3],'labas'.at(3));  //a            //a   
console.log('labas'[4],'labas'.at(4));  //s            //s   
console.log('labas'[4],'labas'.at(4));  //s            //s   
console.log('labas'[5],'labas'.at(5));  //undefined    //undefined           
console.log('labas'[-1],'labas'.at(-1));  //undefined  //s           
console.log('labas'[-2],'labas'.at(-2));  //undefined  //a   
console.log('labas'[-3],'labas'.at(-3));  //undefined  //b   
console.log('labas'[-4],'labas'.at(-4));  //undefined  //a   
console.log('labas'[-5],'labas'.at(-5));  //undefined  //l   

console.clear();

// charCodeAt nurodyto stringo characterio ansii skaitinė reikšmė
console.log('a'.charCodeAt(0));      //97
console.log('b'.charCodeAt(0));      //98
console.log('labas'.charCodeAt(0));  //108
console.log('labas'.charCodeAt(1));  //97

// concat stringų sujungimas
 
const abc = ['a', 'b', 'c', 'd', 'e', 'f'];

const start = 'Abecele: ';

let a1 = '';
a1 += start;
a1 += abc[0];
a1 += abc[1];
a1 += abc[2];
a1 += abc[3];
a1 += abc[4];
a1 += abc[5];
console.log(a1); // Abecele: abcdef

let a2 = start + abc[0] + abc[1] + abc[2] + abc[3] + abc[4] + abc[5];
console.log(a2); // Abecele: abcdef


let a3 = start;
for (let i = 0; i < abc.length; i++){
    a3 += abc[i];
}
console.log(a3); // Abecele: abcdef


const a4 = start.concat(...abc); // prijungė visus array narius prie stringo start
console.log(a4); // Abecele: abcdef

// includes metodas

console.clear();
console.log('Labas rytas'.includes('a')); // true
console.log('Labas rytas'.includes('A')); // false
console.log('Labas rytas'.includes(' ')); // true
console.log('Labas rytas'.includes('ab')); // true
console.log('Labas rytas'.includes('as')); // true
console.log('Labas rytas'.includes('rytas')); // true
console.log('Labas rytas'.includes('labas')); // false

console.log('Labas rytas'.indexOf('a')); //1
console.log('Labas rytas'.indexOf('A')); // -1
console.log('Labas rytas'.indexOf(' ')); //5
console.log('Labas rytas'.indexOf('ab')); //1
console.log('Labas rytas'.indexOf('as')); //3
console.log('Labas rytas'.indexOf('rytas')); //6
console.log('Labas rytas'.indexOf('labas')); // -1

console.log('Labas rytas'.indexOf('a', 2)); //3 nes prasdeda nuo (lab)|bas


/// Namų darbas
// be metodų tik for ir if suskaičiuoti raides žodyje

function kiek(tekstas, raide){
    let n = 0;
    for (let i = 0; i < tekstas.length; i++){
        if (tekstas[i] === raide) {
            n++;
        }
    }
    return n;
}
console.log(kiek('labas', 'a'));

// repeat

console.clear();
console.log('Labas'.repeat(6)); // LabasLabasLabasLabasLabasLabas

// replace

const r1 = 'Labas';
const r2 = r1.replace('a', 'o');
console.log(r2); // Lobas

const r3 = 'Labas rytas';
const r4 = r3.replace('rytas', 'vakaras'); 
console.log(r4); // Labas vakaras

// replaceAll

const r5 = 'Labas';
const r6 = r5.replaceAll('a', '_');
console.log(r6); // L_b_s



// 10-03




console.log('\n\r\n\r######  10-03   #####\n\r');

const kopustas = 'kopustas';
console.log(kopustas.slice(1));
console.log(kopustas.slice(-6));
console.log(kopustas.slice(-3));
console.log('----' + kopustas.slice(-6, -3));

const pvz ="Labas rytas suraitytas";
console.log(pvz.split('x')); // ['Labas rytas suraitytas']
console.log(pvz.split('a')); //[ 'L', 'b', 's ryt', 's sur', 'ityt', 's' ]
console.log(pvz.split(' ')); //[ 'Labas', 'rytas', 'suraitytas' ]   

const pvz2  = 'vasara';
const pvz2PoSplit = pvz2.split('a');
console.log(pvz2PoSplit); //[ 'v', 's', 'r', '' ]

console.log('------------');
console.log(''.split('x')); // -> [ '' ]
console.log('asd'.split('asd'));  // -> [ '', '' ]
console.log(''.split('')); // -> []


//console.clear();

console.log('Labas'.startsWith('x'));  //false
console.log('Labas'.startsWith('l'));  //false
console.log('Labas'.startsWith('L'));  //true
console.log('Labas'.startsWith('La'));  //true
console.log('Labas'.startsWith('Labs'));  //false
console.log('Labas'.startsWith('Labas'));  //true
console.log(''.startsWith(''));  //true

console.clear();

console.log('Vasara'.endsWith('x'));   //false
console.log('Vasara'.endsWith('A'));   //false
console.log('Vasara'.endsWith('a'));  //true
console.log('Vasara'.endsWith('sa'));   //false
console.log('Vasara'.endsWith('ra'));  //true
console.log('Vasara'.endsWith('sara'));   //true
console.log('Vasara'.endsWith('vasara'));   //false
console.log('Vasara'.endsWith('Vasara'));   //true
console.log(''.endsWith(''));               //true

//console.clear();

const pasaka = 'Ryto pasala apei Jonuka ir Gretute';
const paskaUpercase = pasaka.toUpperCase();
const paskaLowercase = pasaka.toLowerCase();
console.log(paskaUpercase); //RYTO PASALA APEI JONUKA IR GRETUTE  
console.log(paskaLowercase); //ryto pasala apei jonuka ir gretute 
console.log('Labas'.toLowerCase()); // -> labas
console.log('Labas'.toUpperCase()); // -> LABAS


// console.clear();

const tarpai = '         labas         ';
const beTarpu = tarpai.trim();
console.log(`"${tarpai}"`);
console.log(`"${beTarpu}"`);

const tarpai2 = '         labas  rytas         ';
const beTarpu2 = tarpai2.trim();
console.log(`"${tarpai2}"`); // "         labas  rytas         "     
console.log(`"${beTarpu2}"`) // "labas  rytas"

//trimend, trimstart analogiškai tik priekiui arba galui

