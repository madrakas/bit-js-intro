/* Duodamas vardas
reik patikrinti ar tai vardas */

//Jonas -> true
//Maryte -> true
//labas -> false
//Azuolas -> true
//Egle -> true

console.clear();

function looksLikeName(text){
    for (let i = 0; i < text.length; i++) {
        //const simbolis = neleistiniSimboliai[i];
       // if (text.includes(simbolis)) {

       if ((text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 123)  ||  (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90)) {
            
        } else {
            const simbolis = text.charAt(i);
            return `Klaida: "${simbolis}" nera leistinas simbolis`;
        }
    }
    
    
    
    
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
   
    
    // jeigu, neradau kaip atmesti, kodel "text"
    // negaletu buti tinkamas vardas
    //      graziname: true

    return true;
}

function isName(){

}

console.log(looksLikeName('Jona1s'));
console.log(looksLikeName('Maryt@e'));
console.log(looksLikeName('Jonas'), true);
console.log(looksLikeName('Maryte'), true);
console.log(looksLikeName('Marytė'), true);
console.log(looksLikeName('labas'), false);
console.log(looksLikeName('AZUOLAS'), false);
console.log(looksLikeName('AzuolaS'), false);
console.log(looksLikeName('AzuOlas'), false);
console.log(looksLikeName('Azuolas'), true);
console.log(looksLikeName('5Azuolas'), false);
console.log(looksLikeName('Azuo5las'), false);
console.log(looksLikeName('Azuolas5'), false);
console.log(looksLikeName('Eg1e'), false);
console.log(looksLikeName('Egl3'), false);
console.log(looksLikeName('Eg_le'), false);





console.clear ();

function isName(name){
    if (typeof name !== 'string'){
        return 'Klaida: netinkamas duomens tipas. Privalo būti string.';
    }
    
    const nameMinLength = 2;
    if (name.length < nameMinLength){
        return `Klaida: per trumpas vardas. Minimum ${nameMinLength} simboliai.`;
    }
    
    const nameMaxLength = 20;
    if (name.length > nameMaxLength){
        return `Klaida: per ilgas vardas. Maksimum ${nameMaxLength} simboliai.`;
    }
    const pirmaRade = name[0];
    console.log(pirmaRade.toUpperCase);
    if (pirmaRade.toUpperCase() !== pirmaRade){
        return `Klaida: pirma raidė turi būti didžioji`;

    }

    const likusiosRaides = name.slice(1);
    if (likusiosRaides.toLowerCase() !== likusiosRaides){ 
        return `Klaida: negali būti didžiųjų raidžių išskyrus 1-ąją.`;
    }

    //turime leistinu simboliu sarasa
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    //einam per simbolius
    const nameLowerCase = name.toLowerCase();
    for (let i = 0; i < nameLowerCase.length; i++){
        const raide = nameLowerCase[i].toLowerCase();
        if (!abc.includes(raide)){
            return `Klaida: neleistinas simbolis varde "${raide}"`;
        }
    }

    return 'Ok';
}

/* console.log(isName());
console.log(isName(undefined));
console.log(isName(null));
console.log(isName(13));
console.log(isName(NaN));
console.log(isName(Infinity));
console.log(isName(true));
console.log(isName(false));
console.log(isName([]));
console.log(isName({}));
console.log(isName(isName));
console.log(isName('Jonas'));
console.log(isName(''));
console.log(isName('L'));
console.log(isName('Li'));
console.log(isName('Liasdasdasdsadasdsadasd'));
 */
console.log(isName('MarytE'));
console.log(isName('OnA'));
console.log(isName('PEtras'));

console.log(isName('Mar9te'));
console.log(isName('On4'));
console.log(isName('P3tras'));
console.log(isName('J nas'));
console.log(isName('J nas'));
console.log(isName('9onas'));




