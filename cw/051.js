console.clear();

function high(x){
    const words = x.split(' ');
    const abc ='#abcdefghijklmnopqrstuvwxyz';
    let winWord ='';
    let winPoints = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let wordPoints = 0;
        for (let i2 = 0; i2 < word.length; i2++) {
            wordPoints += abc.indexOf(word[i2]);
        }
        if (wordPoints > winPoints){
            winPoints = wordPoints;
            winWord = word;
        }
    }
    return winWord;
}

console.log(high('man i need a taxi up to ubud'), 'taxi');
//console.log(high('what time are we climbing up the volcano'), 'volcano'); 
//console.log(high('take me to semynak'), 'semynak');   
//console.log(high('aa b'), 'aa');
//console.log(high('b aa'), 'b');
//console.log(high('bb d'), 'bb');
//console.log(high('d bb'), 'd');
//console.log(high('aaa b'), 'aaa');