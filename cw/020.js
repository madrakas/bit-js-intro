//k6 

/* Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer. */

console.clear();

function digitalRoot0(n) {
    nStr = '' + n; 
    nArr = nStr.split('');

    let result = 0;
    let a = 0;
    let aSum = 0;

    for (i = 0; i < nStr.length; i++){
        a = +nStr[i];
        aSum += a;
    }
        result = aSum;
        return result;
}

function digitalRoot(n){
    for (;n >9;){
        n = digitalRoot0(n);
    }

    return n;

}

  console.log( digitalRoot(16), 7 );
  console.log( digitalRoot(456), 6 );