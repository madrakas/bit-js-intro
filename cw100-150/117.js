console.clear();
function Xbonacci(signature,n){
    // console.log(signature, n);
    let result =  signature;
    const len = result.length;
  
    if (n <= len){
      result = result.slice(0, n);
      return result;
    }
  
    if (n < 1) {
      return [];
    }

    while (result.length < n) {
        result.push(result.slice(len * -1).reduce((accu, val)=> accu + val));
    }
    console.log('last stage');
    console.log('len: ' + len);
    console.log('n: ' + n);
    return result;
}


// console.log(Xbonacci([0,1],10),[0,1,1,2,3,5,8,13,21,34]);
// console.log(Xbonacci([1,1],10),[1,1,2,3,5,8,13,21,34,55]);
// console.log(Xbonacci([0,0,0,0,1],10),[0,0,0,0,1,1,2,4,8,16]);
// console.log(Xbonacci([1,0,0,0,0,0,1],10),[1,0,0,0,0,0,1,2,3,6]);
// console.log(Xbonacci([1,0,0,0,0,0,0,0,0,0],20),[1,0,0,0,0,0,0,0,0,0,1,1,2,4,8,16,32,64,128,256]);
console.log(Xbonacci([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ], 9), [1, 2, 3, 4, 5, 6, 7, 8, 9]);