// k7

console.clear();

function highAndLow(numStr){
    const numArr = numStr.split(' ');
    for (i = 0; i < numArr.length; i++ ){
        numArr[i] = Number(numArr[i]);
    }
    numArr.sort(function(a, b){return a-b});
    return numArr[numArr.length - 1] + ' ' + numArr[0];
    
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");