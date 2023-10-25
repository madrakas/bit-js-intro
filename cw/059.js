console.clear();

function count(string) {
    // Find unique characters
    let uniqCharList = '';
    for (let i = 0; i < string.length; i++) {
        if (!uniqCharList.includes(string[i])){
            uniqCharList += string[i];
        }
    }

    const result={};
    //Count uniqe character occurrences
    for (let i1 = 0; i1 < uniqCharList.length; i1++) {
        const character = uniqCharList[i1];
        let o = 0;
        for (let i2 = 0; i2 < string.length; i2++) {
            if (string[i2] === character){
                o++;
            }
        }
        result[character] = o;
    }    
    return(result)
}


//   console.log(count(''), {});
//   console.log(count('a'), {'a': 1});
  console.log(count('ab'), {'a': 1, 'b': 1});
//   console.log(count('aba'), {'a': 2, 'b': 1});
//   console.log(count('ABC'), {'A': 1, 'B': 1, 'C': 1});