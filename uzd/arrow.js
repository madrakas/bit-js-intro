console.clear();

const n1 = 7;
const n2 = 5;

//function decalration
function suma(a, b) {
    return a + b;
}

console.log(suma(n1, n2));
console.log(`${n1} + ${n2} = ${suma(n1, n2)}`);


//kintamajam priskirti anoniminę funkciją

const skirtumas = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${skirtumas(n1, n2)}`);


// kam to reikia:

let kaDaryti = null;
/// ############# reikia užbaigti 


//arrow function 
const sandauga = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${sandauga(n1, n2)}`);

//arrow function 
const dalmuo0 = (a, b) => {
    return a / b;
}
console.log(`${n1} * ${n2} = ${dalmuo0(n1, n2)}`);

//arrow function 
// jeigu logikos bloke yra tik viena procedura (statement)
// tai galime nerašytu { return }


//     pavadinimas (parametrai) gražinimas(=>) rezultatas
const dalmuo = (a, b) => a /b;
console.log(`${n1} * ${n2} = ${dalmuo(n1, n2)}`);

//arrow function
/* function kvadratu(a){
    return a ** 2;
}; */



//const kvadratu = (a) => a ** 2;
// jeigu parametrų bloke tik vienas parametras, galima nerašyti (a)
const kvadratu = a => a ** 2;

console.log(`${n1} ** 2 = ${kvadratu(n1)}`);
console.log(`${n2} ** 2 = ${kvadratu(n2)}`);

const pirmaRaide = zodis => zodis[0];

console.log(pirmaRaide[5]);
console.log(pirmaRaide(''));

function firstLetter(str){
    if (typeof str !== 'strin'){
        return 'error first param has to be String';
    }

    /// ######### reikia pabaigti
}



