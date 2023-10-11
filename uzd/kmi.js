console.clear();

//1 variantas (true)

//Markas 
// const ugis1 = 1.69;
// const svoris1 = 78;

//Jonas

// const ugis2 = 1.95;
// const svoris2 = 92;

//2 variantas 

//Markas
const ugis1 = 1.88;
const svoris1 = 95;

//Jonas (false)

const ugis2 = 1.76;
const svoris2 = 85;


const dalmuo = (a, b) => a /b;

const kmi = +((svoris, ugis) => (svoris / ugis ** 2).toFixed(2));

const kmi1 = kmi (svoris1, ugis1);
const kmi2 = kmi (svoris2, ugis2);

markHigherBMI = kmi1 > kmi2;

if (kmi1 > kmi2){
    console.log(`Marko KMI (${kmi1}) didesnis nei Jono (${kmi2})!`);
} else {
    console.log(`Jono KMI (${kmi2}) yra didesnis nei Marko (${kmi1})!`);
}
//console.log(markHigherBMI);

console.clear();

function arbitras(a1, a2, a3, b1, b2, b3){

    const v1 = ((a1 +a2 + a3) / 3).toFixed(2);
    const v2 = ((b1 +b2 + b3) / 3).toFixed(2);



    if (v1 > v2) {
        if (v1 >= 100){
            return (`delfinai laimėjo ${v1} > ${v2}`);
        } else {
            return (`niekas nelaimėjo ${v1} < 100`);
        }
        
    } else if(v2 < v1){
        if (v2 >= 100 ){
            return (`koalos laimėjo ${v2} > ${v1}`);
        } else {
            return (`niekas nelaimėjo ${v2} < 100`);
        }
    } else {
        return (`lygiosios ${v1} = ${v2}`);
    }

}

console.log('1: ' + arbitras(96, 108, 89, 88, 91, 110));
console.log('2: ' + arbitras(97, 112, 101, 109, 95, 106));

