decodeMorse = function(morseCode){
   const words = morseCode.split('   ');
   const wordsDecr = [];

   for (let i1 = 0; i1 < words.length; i1++) {
        const letters = words[i1].split('');
        let word = '';
        for (let i2 = 0; i2 < letters.length; i2++) {
            const element = letters[i2];
            word += MORSE_CODE[letters[i2]];
        }    
        wordsDecr.push(wordsDecr);
   }

   return wordsDecr.join(' ');
   
    // Your code here
    // You can use MORSE_CODE[morse]
    
  }

