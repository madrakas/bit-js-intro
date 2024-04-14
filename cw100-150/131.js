console.clear();

function playPass(s, n) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '9876543210';

    let result ='';
    let char = '';

    s = s.toLowerCase();
    

    for (let i = 0; i < s.length; i++) {
        
        if (letters.includes(s[i])){
            const position = letters.indexOf(s[i]);
            let newPosition = position + n;
            while (newPosition > letters.length -1){
                newPosition = newPosition - letters.length ;
            }
            if (i % 2 === 0 ) {
                char = letters[newPosition].toUpperCase();
            }else{
                char = letters[newPosition];
            }   

        }else if(numbers.includes(s[i])) {
            const numPos = parseInt(s[i]);
            char = numbers[numPos];
        
        }else{
            char = s[i];
        }

        result += char;
    }
    return result.split('').reverse().join('');
}



// console.log(playPass("I LOVE YOU!!!", 1), "!!!vPz fWpM J");
console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2), "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO");