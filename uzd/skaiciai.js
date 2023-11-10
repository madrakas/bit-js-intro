console.clear();
console.log('Labas');

// Skaičiai

const skaiciai = [10, 2, 8, 4, 6];

let suma = 0;

for (let i = 0; i < skaiciai.length; i++) {
   suma += skaiciai[i] ;
}

const vidurkis = suma/skaiciai.length;

console.log(vidurkis);




// MEDIANA

let skaiciaiAZ = skaiciai.sort ((a, b) => a - b);
// console.log(skaiciaiAZ);
const midleIndex = Math.floor(skaiciaiAZ.length / 2);


const mediana = skaiciaiAZ.length % 2 ? skaiciaiAZ[midleIndex - 1] : (skaiciaiAZ[midleIndex] / 2);
console.log(mediana);

