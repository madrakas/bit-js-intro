/* 
"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
 */

function addLength(str) {
    const words = str.split(' ');
    const result = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i] + ' ' + words[i].length;
        result.push(word);
    }
    return result;
}

    