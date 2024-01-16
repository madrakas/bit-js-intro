console.clear();

function cleanString(s) {
    let result='';
    s.split('').forEach(x => {
        x === '#' ? result = result.slice(0, result.length - 1) : result += x;
    });
    return result;
}


console.log(cleanString('abc#d##c'), 'ac');
console.log(cleanString('abc####d##c#'), '');
console.log(cleanString('#######'), '');