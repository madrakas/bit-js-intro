// k6 

/* A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */

console.clear();


function isPangram(test){
    if (test.length < 0){
        return false;
    }

    const testLC = test.toLowerCase();
    const whitelist="abcdefghijklmnopqrstuvxyz";

    for (i = 0; i < whitelist.length; i++){
        if (!testLC.includes(whitelist[i])){
            return false;
        }
    } 
    return true;

}
console.log(isPangram("The quick brown fox jumps over the lazy dog.", true));
console.log(isPangram("This is not a pangram."), false);

