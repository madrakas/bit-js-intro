/* Duodamas vardas
reik patikrinti ar tai vardas */

//Jonas -> true
//Maryte -> true
//labas -> false
//Azuolas -> true
//Egle -> true

console.clear();

function looksLikeName(text){
    // jeigu, pirma raide nera didzioji
    //      graziname: false
    if (text[0] !== text[0].toUpperCase()) {
        return 'Klaida: pirma raide privalo buti didzioji';
    }

    // jeigu, visi kiti simboliai, apart pirmo,
    // yra ne mazosios raides
    //      graziname: false
    const likusiosRaides = text.slice(1);
    if (likusiosRaides !== likusiosRaides.toLowerCase()) {
        return 'Klaida: visos likusios raides privalo buti mazosios';
    }

    // jeigu, yra simbolis 0, 1, 2 .... 9 (skaitmuo)
    //      graziname: false
   // const neleistiniSimboliai = '0123456789_,.?!@#$%^& 👀';
    for (let i = 0; i < text.length; i++) {
        //const simbolis = neleistiniSimboliai[i];
       // if (text.includes(simbolis)) {

       if ((text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 123)  ||  (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90)) {
            
        } else {
            const simbolis = text.charAt(i);
            return `Klaida: "${simbolis}" nera leistinas simbolis`;
        }
    }
    
    /* for(let i = 0; i <= vardas.length - 1; i++){
        let neraide = false;
        if ((vardas.charCodeAt(i) >= 97 && vardas.charCodeAt(i) <= 123)  ||  (vardas.charCodeAt(i) >= 65 && vardas.charCodeAt(i) <= 90)) {
        
        }else{
            neraide = true;
        }
    }
 */

    // jeigu, neradau kaip atmesti, kodel "text"
    // negaletu buti tinkamas vardas
    //      graziname: true

    return true;
}



console.log(looksLikeName('Jona1s'));
console.log(looksLikeName('Maryt@e'));
console.log(looksLikeName('labas'));





