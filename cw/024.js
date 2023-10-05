//k6

/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if 
the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). 
The next words should be always capitalized. */

console.clear();


function toCamelCase(string){

    const spacedString = string.replaceAll('-', ' ').replaceAll('_', ' ');
    const stringArr = spacedString.split(' ');
    if (stringArr.length === 0){
        return '';
    }
    if (stringArr.length === 1){
        return string;
    }

    let result = stringArr[0];
    for (let i = 1; i < stringArr.length; i++){
        console.log('------');
        let word = stringArr[i];
        word = word[0].toUpperCase() + word.slice(1);
        console.log(word);
        stringArr[i] = word;
    }

    return stringArr.join('');
}



//console.log(toCamelCase(''), '')
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior")
// console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior")
// console.log(toCamelCase("A-B-C"), "ABC")