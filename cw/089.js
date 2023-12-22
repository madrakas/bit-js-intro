console.clear();

function decipherThis (text) {

    const numbers = '1234567890';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const codes = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];

    const result = text.split(' ').map(word => { 
        
        let numStr = '';

        for (let i = 0; numbers.includes(word[i]); i++) {
            numStr += word[i];
        }

        const start = letters[codes.indexOf(+numStr)]; 

        const wordtmp = word.slice(numStr.length, word.length);

        if (wordtmp.length === 0){
            return start;   
        }else if(wordtmp.length === 1){
            return start + wordtmp[0];  
        }

        const end = wordtmp[(wordtmp.length - 1)] + wordtmp.slice(1, wordtmp.length - 1) + wordtmp[0]; 
        return start + '' + end;
    }).join(' ');

    return result;

}
// console.log('Hi');


console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'));
