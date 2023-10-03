/* Duodamas vardas
reik patikrinti ar tai vardas */

//Jonas -> true
//Maryte -> true
//labas -> false
//Azuolas -> true
//Egle -> true

console.clear();

function looksLikeName(vardas){
    let isMazosios = (vardas[0] === vardas[0].toUpperCase());

    //let nePirmaDizioji = (vardas.split(1) === vardas.split(1).toLowercase());
    console.log(vardas.split());
    let neraide =  false;
    for(let i = 0; i <= vardas.length - 1; i++){
        if ((vardas.charCodeAt(i) >= 97 && vardas.charCodeAt(i) <= 123)  ||  (vardas.charCodeAt(i) >= 65 && vardas.charCodeAt(i) <= 90)) {
        
        }else{
            neraide = true;
        }
    }

    return "isMazosios: " + isMazosios + ' | Neraidė: ' + neraide;
}


console.log(looksLikeName('Jona1s'));
console.log(looksLikeName('Maryt@e'));
console.log(looksLikeName('labas'));





