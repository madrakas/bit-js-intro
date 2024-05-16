function beggars(values, n){
    if (Number(n) === NaN || n < 1) {
        return [];
    }

    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(0);
    }

    let bIdx = 0;
    
    for (let cIdx = 0; cIdx < values.length; cIdx++){
        
        bIdx = (bIdx >= n) ? 0 : bIdx;
        
        if (result[bIdx] === undefined) {

            result.push(values[cIdx]);
        } else {
            result[bIdx] = result[bIdx] + values[cIdx];
        }
        bIdx++;
    }

    return result

    //your code here
}


// console.log(beggars([1,2,3,4,5],1),[15]);
// console.log(beggars([1,2,3,4,5],2),[9,6]);
// console.log(beggars([1,2,3,4,5],3),[5,7,3]);
console.log(beggars([1,2,3,4,5],6),[1,2,3,4,5,0]);
// console.log(beggars([1,2,3,4,5],0),[]);
