console.clear();

function encryptThis (text) {

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const codes = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];

    const result = text.split(' ').map(word => { 
        
        const start = codes[letters.indexOf(word[0])]; 
        if (word.length === 1){
            return start;   
        }else if(word.length === 2){
            return start + word[1];  
        }

        const end = word[(word.length - 1)] + word.slice(2, word.length - 1) + word[1]; 
        return start + '' + end;
    }).join(' ');

    return result;

}
console.log('Hi');

console.log(encryptThis('A wise old owl lived in an oak'));
