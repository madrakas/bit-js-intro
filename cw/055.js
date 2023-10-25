
const volume = (a, b, c) => a * b * c;

function findDifference(a, b) {
    const v1 = a[0] * a[1] * a[2];
    const v2 = b[0] * b[1] * b[2];
    
    const vDiff = v1 - v2; 

    return vDiff < 0 ? vDif * -1 : vDiff;
  }

  console.log(findDifference([3, 2, 5], [1, 4, 4]), 14);
  console.log(findDifference([9, 7, 2], [5, 2, 2]), 106);
  console.log(findDifference([11, 2, 5], [1, 10, 8]), 30);
  console.log(findDifference([4, 4, 7], [3, 9, 3]), 31);
  console.log(findDifference([15, 20, 25], [10, 30, 25]), 0);
