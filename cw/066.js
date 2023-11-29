console.clear();

function wave(str){

    result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' '){
            continue;
        }
        letter= str[i].toUpperCase();
        letters = str.split('');
        letters.splice(i,1, ...letter);
        result.push(letters.join(''));
    }
    return result;
}

console.log(wave('hello world'));
// ["Hello", "hEllo", "heLlo", "helLo", "hellO"];

