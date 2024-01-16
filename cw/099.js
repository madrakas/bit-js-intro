console.clear();


function getLengthOfMissingArray(arrayOfArrays) {
    // console.log(arrayOfArrays); 
   if (arrayOfArrays.length === 0) {
     return 0;
   }
   if (arrayOfArrays.filter(a => (!Array.isArray(a)))) {
         return 0;
   }
   
   if (arrayOfArrays.filter(a => (a.length === 0)).length !== 0) {
         return 0;
   }
 
    
     let result = 0;
     const lengths  = arrayOfArrays.reduce((accu, val)  => {
         accu.push(val.length);
         return accu} , [])
         .sort((a, b) => b - a)
         .reduce((accu, val) => {
             if (accu - val > 1) {
                 result = accu -1;
             } 
             accu = val;
             return accu;
         }, 0);
     return result;
   }
   

// console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 3);
// console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 2);
// console.log(getLengthOfMissingArray([ [], [ 0 ], [ 1, 4, 0, 2, 4 ], [ 0, 3, 3 ], [ 3, 2, 0, 0 ] ] ), 2);
// console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ), 5);

console.log(getLengthOfMissingArray([]));


// console.log(Array.isArray(null));