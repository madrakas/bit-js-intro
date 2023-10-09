//k6

/* Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
If it is the case we will return k, if not return -1. */
console.clear();

function digPow(n, p0){
const nStr = n +'';
let p = p0;
let sum = 0;

    for (let i = 0 ; i < nStr.length; i++){
        sum += nStr[i] ** p++;
    }
    return sum % n === 0 ? sum /n : -1;
}

console.log(digPow(89, 1), 1);
console.log(digPow(92, 1), -1);
console.log(digPow(46288, 3), 51);