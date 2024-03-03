console.clear();
// https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript
function prefill(n, v) {
    if (n > 0){
        return result = Array(n).fill(v);
    }else if (Number.isInteger(n)){
        // throw TypeError("n must be integer")
        return (n + ' is invalid');
    }else{
        return [];
    }
}

// console.log(prefill(3,1), [1,1,1]);
// console.log(prefill(2,'abc'), ['abc','abc']);
// console.log(prefill('1',1), [1]);
console.log(prefill(3, prefill(2,'2d')), [['2d','2d'],['2d','2d'],['2d','2d']]);