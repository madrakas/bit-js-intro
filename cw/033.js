// k6


/* findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55 */

function findUniq(arr){
  let m1Count= 1;
  let m2Count = 0; 
  let m1 = arr[0];
  let m2 = '';

  for (let i = 1; i < arr.length || (m1Count < 1 && m2Count < 1); i++){
    arr[i] === m1 ? m1Count++ : (m2 = arr[i], m2Count++);
  }
    return m1Count > m2Count ? m2 : m1;
}



  
  

console.log(findUniq([ 1, 0, 0 ]), 1);
console.log(findUniq([ 0, 1, 0 ]), 1);
console.log(findUniq([ 0, 0, 1 ]), 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);