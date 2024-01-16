console.clear();

function solve(s) {
    const blacklist = 'aeiou';
    const abc = '_abcdefghijklmnopqrstuvwxyz';
    const result = s.split('')
        .reduce((accu, val) => (blacklist.includes(val) ? accu + ' ' : accu + val), '')
        .split(' ')
        .map(a => (a.split('').reduce((sum, x) => sum + abc.indexOf(x),0)))
        .sort((a, b) => b - a)[0];
    return result;
};


console.log(solve("zodiac"),26);
// console.log(solve("chruschtschov"),80);
// console.log(solve("khrushchev"),38);
// console.log(solve("strength"),57);
// console.log(solve("catchphrase"),73);
// console.log(solve("twelfthstreet"),103);
// console.log(solve("mischtschenkoana"),80);
// console.log(solve("az"),26);



