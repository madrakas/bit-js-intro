console.clear();
function abbrevName(name){

    if (!name.includes(" ")) {
        return 'Name must contain two words';
    }

    if (typeof(name) !== 'string') {
        return "Name is not a string";
    }

    //split
    const nameArr = name.split(" ");
    let first = nameArr[0];
    let last = nameArr[1];
    return `${first[0].toUpperCase()}.${last[0].toUpperCase()}`

}



console.clear(abbrevName("Sam Harris"), "S.H");
console.clear(abbrevName("Patrick Feenan"), "P.F");
console.clear(abbrevName("Evan Cole"), "E.C");
console.clear(abbrevName("P Favuzzi"), "P.F");
console.clear(abbrevName("David Mendieta"), "D.M");