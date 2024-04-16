console.clear();

function upArray(arr){
   if (!Array.isArray(arr) || arr.length < 1) {
    return null;
   }

   const badElements = arr.filter( a => {
    if (!Number.isInteger(a) || a < 0 || a > 9) {
      return a;
    }
   });

   if (badElements.length > 0) return null;

    
   for (let i = arr.length - 1; i > -1; i--) {
    if (arr[i] < 9){
      arr[i]++;
      break;
    }else{
      arr[i] = 0;
      if (i === 0) {
        arr.unshift(1);
        break;
      }
    }
  }

    return arr;
  }

// console.log(upArray([4,3,2,5]), [4,3,2,6]);
// console.log(upArray([2,3,9,9]), [2,4,0,0]);
console.log(upArray(    [11,1,1]),   [1,0,0]);
// console.log(upArray(    [0,7]),     [0,8]);
// console.log(upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]), [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,1]);