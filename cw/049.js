console.clear();

function findMissingLetter(array){
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    let missingLeter = '';
    if (!abc.includes(array[0])){
        abc = abc.toUpperCase();
    }

    abc = abc + '';
    const firstLetter = array[0];
    const lastLetter = array[array.length - 1];
    
    const firstLetterIndex = abc.indexOf(firstLetter);
    const lastLetterIndex = abc.indexOf(lastLetter);

    for (let i = firstLetterIndex; i < lastLetterIndex; i++){
        if (!array.includes(abc[i])){
            missingLeter = abc[i];
            i = lastLetterIndex;
        }
        
    }
    return missingLeter;
}

console.log(findMissingLetter(['a','b','c','d','f']), 'e');
console.log(findMissingLetter(['O','Q','R','S']), 'P');