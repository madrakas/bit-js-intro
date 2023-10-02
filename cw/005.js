console.clear();

function sameCase(a, b){
    let ac =0;
    let bc =0;

    if(a.charCodeAt() >= 97 && a.charCodeAt() <= 122){
        ac=0;
    } else if (a.charCodeAt() >= 65 && a.charCodeAt() <= 90){
        ac=1;
    } else{
        return -1;
    }

    if(b.charCodeAt() >= 97 && b.charCodeAt() <= 122){
        bc=0;
    } else if (b.charCodeAt() >= 65 && b.charCodeAt() <= 90){
        bc=1;
    } else{
        return -1;
    }
       return + (ac === bc);
}

console.log('-----------------');
console.log(sameCase('C', 'B'), 1);
console.log(sameCase('b', 'a'), 1);
console.log(sameCase('d', 'd'), 1);
console.log(sameCase('A', 's'), 0);
console.log(sameCase('c', 'B'), 0);
console.log(sameCase('b', 'Z'), 0);
console.log(sameCase('H', ':'), -1);
console.log(sameCase('\t', 'Z'), -1);


console.log('-----------------');
console.log('a', 'a'.charCodeAt());
console.log('z', 'z'.charCodeAt());
console.log('A', 'A'.charCodeAt());
console.log('Z', 'Z'.charCodeAt());