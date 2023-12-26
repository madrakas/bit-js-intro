console.clear();

function  nthFibo(n){
    return n === 1 ? 0 : n ===2 ? 1 : nthFibo(n - 1) + nthFibo(n - 2);
    // if(n === 1) {
    //     return 0;
    // }
    // if(n === 2) {
    //     return 1;
    // }  else {
    //     return nthFibo(n - 1) + nthFibo(n - 2);
    // }
}
console.log(nthFibo(7));