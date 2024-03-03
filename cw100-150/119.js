console.clear();
// https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript
function prefill(n, v) {
    console.log(n,v);
   
    // console.log('zzzz', parseInt(Infinity));



    if (parseInt(n) != NaN){
        const x = parseInt(n);
        // console.log('aaa'); 
    } else {
        throw new TypeError (n + ' is invalid');
    }

    if (n > 0){
        return result = Array(x).fill(v);
    
    }else if(n === 0){
        return [];
    }else if (n === Infinity || n === -Infinity || n === NaN){
        throw new Error (n + ' is invalid');
    }else if (!Number.isInteger(n)){
        throw new TypeError (n + ' is invalid');
    }else{
        return [];
    }
 }

// console.log(prefill(3,1), [1,1,1]);
console.log(prefill(Infinity, undefined), [1,1,1]);


// console.log(prefill(2,'abc'), ['abc','abc']);
// console.log(prefill('1',1), [1]);
// console.log(prefill(3, prefill(2,'2d')), [['2d','2d'],['2d','2d'],['2d','2d']]);