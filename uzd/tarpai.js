console.clear;


/* duoda tekstą
reikia išvalyti tarpus pradžioje ir pabaigoje,
ir dvigubus tarpus viduryje
*/


const str1 ='    labas      ';
const ats1 = 'labas';
const bandymas1 = str1.trim();
console.log(`"${bandymas1}"`);

const str2 = '    labas    rytas    ';
const ats2 ='labas rytas';

/* const bandymas2 = str2.trim()
        .replaceAll('  ', ' ')
        .replaceAll('  ', ' ')
        .replaceAll('  ', ' ')
        .replaceAll('  ', ' ' )*/


//        console.log(`"${bandymas2}"`);

console.clear();


/* bandymas2 = bandymas2.replaceAll('  ', '');
bandymas2 = bandymas2.replaceAll('  ', '');
bandymas2 = bandymas2.replaceAll('  ', '');
bandymas2 = bandymas2.replaceAll('  ', '');
bandymas2 = bandymas2.replaceAll('  ', '');
*/

let bandymas2 = str2.trim();

for (; bandymas2.includes('  ');) {
    bandymas2 = bandymas2.replaceAll('  ', '');
}

console.log(`---"${bandymas2}"----`);


const str3 = 'Ką     tu?     Ka   Vakare?';
const ats3 = 'Ką tu? Ka Vakare?';


function isvalymas (baisusTekstas){
    let ats = baisusTekstas.trim();

    for (; ats.includes('  ');) {
        ats = ats.replaceAll('  ', ' ');
    }

    return ats;

}

console.log(isvalymas(str1), ats1);
console.log(isvalymas(str2), ats2);
console.log(isvalymas(str3), ats3);

console.log(isvalymas('   abra    kadabra'));
console.log(isvalymas('abra kadabra'));
