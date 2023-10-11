//k8
console.clear();

function sqArrSum(arr, d){
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result  += arr[i] ** d;
    }
    return result;
}

function arrayMadness(a, b) {
    return (sqArrSum(a, 2) > sqArrSum(b, 3));
  }


  //console.log(arrayMadness([4,5,6],[1,2,3]), true);
  console.log(arrayMadness([5,6,7],[4,5,6]), false); // 25 + 36 + 49 = 110   | 16 + 25 + 36 = 77
  console.log(arrayMadness([4,5,6],[3,4,5]), false);
  console.log(arrayMadness([3,4,5],[2,3,4]), false);
//   console.log(arrayMadness([2,3,4],[1,2,3]), false);
//   console.log(arrayMadness([1,2,3],[0,1,2]), true);
//   console.log(arrayMadness([5,3,2,4,1],[15]), false);
//   console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), false);
//   console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), false);
//   console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), true);
//   console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), false);