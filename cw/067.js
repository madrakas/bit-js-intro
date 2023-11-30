console.clear();


function sumDigPow(a, b) {

    const x = [ ...Array(b - a + 1).keys() ].map( i => i + (a)).filter( a => (validator(a)));
    return x;
}

function validator(num){
    sum = 0;
    num.toString().split('').map((s, idx) => (parseInt(s) ** (idx + 1))).forEach(num => (sum += num));
    return sum === num;
}

// console.log(validator(89));
//  console.log(sumDigPow(sumDigPow(1, 10)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
// console.log((sumDigPow(10, 100)),  [89]);
// console.log((sumDigPow(90, 100)), []);
// console.log((sumDigPow(90, 150)), [135]);
// console.log((sumDigPow(50, 150)), [89, 135]);
// console.log(sumDigPow(10, 150)), [89, 135]);