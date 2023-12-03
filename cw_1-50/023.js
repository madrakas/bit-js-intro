//k6 

/* Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer. */

console.clear();

function digitalRoot0(n) {
    nStr = '' + n; 
    nArr = nStr.split('');

    let result = 0;
    let a = 1;
    let aSum = 0;

    for (i = 0; i < nStr.length; i++){
        a = a * nStr[i];
    
    }
        result = a;
//        console.log(a);
        return result;
}

function persistence(n){
    let result=0;
    for (;n >9;){
        n = digitalRoot0(n);
        result++;
    }

    return result;

}

console.log(persistence(39),3);
console.log(persistence(4),0);
console.log(persistence(25),2);
console.log(persistence(999),4);