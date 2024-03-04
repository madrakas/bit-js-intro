console.clear();


// https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript
function prefill(n, v) {
    if (n == Infinity || n == -Infinity){
        throw new TypeError(n + ' is invalid');
    }

    let x = 0;

    if (typeof n === 'string') {
        x = parseInt(n);
        if ('' + x !== n) {
            throw new TypeError(n + ' is invalid');
        }
    } else if (Number.isInteger(n)){
        x = n;
    } else {
        throw new TypeError(n + ' is invalid');
    }

    
    if (!Number.isInteger(x)){
        throw new TypeError(n + ' is invalid');
    }

    if (x < 0) {
        throw new TypeError(n + ' is invalid');
    }

    if (x === 0){
        return [];
    }

    return result = Array(x).fill(v);
 }

// console.log(prefill(3,1), [1,1,1]);
console.log(prefill(-5, undefined), [1,1,1]);


// console.log(prefill(2,'abc'), ['abc','abc']);
// console.log(prefill('1',1), [1]);
// console.log(prefill(3, prefill(2,'2d')), [['2d','2d'],['2d','2d'],['2d','2d']]);