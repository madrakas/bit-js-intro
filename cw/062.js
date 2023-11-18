console.clear();
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(txt){
    const rows =txt.split('\n');
    const pigRows = [];
    

    for (const row of rows){
        const pigWords=[];
        const words = row.split(' ');

        for (const word of words){
            const firtsLetter = (firstLetterPosition(word));
            // if ontains no letters
            if (firtsLetter < 0){
                pigWords.push(word);
                continue;
            }
            if (word.length < 2){
                pigWords.push(word + 'ay');
                continue;
            }

            const lastLetter = (lastLetterPosition(word));
            const preWord = word.slice(0, firtsLetter);
            const postWord = word.slice(lastLetter);
            const pigWord = preWord + 
                        word.slice(firtsLetter + 1, lastLetter) + word[firtsLetter] + 'ay' + 
                        postWord;
            pigWords.push(pigWord);
        }
        pigRows.push(pigWords.join(' '));
    }
    
    
    return pigRows.join('\n');
}

function firstLetterPosition (text){
    const whitelist = 'abcdefghijklmnopqrstuvwxyz';
    text = text.toLowerCase();
    let i = 0;
    let contLetter = false;
    for ( ; i < text.length; i++){
        if (whitelist.includes(text[i])) {
            contLetter = true;
            break;
        }
    }
    return contLetter ? i : -1;
}


function lastLetterPosition (text){
    const whitelist = 'abcdefghijklmnopqrstuvwxyz';
    text = text.toLowerCase();
    let i = text.length;
    let contLetter = false;
    for ( ; i > 0; i--){
        if (whitelist.includes(text[i])) {
            contLetter = true;
            break;
        }
    }
    return contLetter ? i + 1 : -1;
}



string = `
This is my string
Acta est fabula
Barba non facit philosophum
Cucullus non facit monachum
Dura lex sed lex
Errare humanum est
Fluctuat nec mergitur
Gutta cavat lapidem
Hic et nunc
In vino veritas
Lux in tenebris lucet
Morituri nolumus mori
Nunc est bibendum
O tempora o mores !`;


console.log(pigIt(string),'| igPay');
// console.log(pigIt('Pig... latin is cool'),'igPay atinlay siay oolcay');
// console.log(pigIt('This is my string'),'hisTay siay ymay tringsay');
// console.log('OO tempora oo mores !', 'Oay emporatay oay oresmay !')


console.log('Labas');
