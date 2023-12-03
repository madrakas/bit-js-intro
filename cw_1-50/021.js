// k6

/* You are given an array (which will have a length of at least 3, but could be very large) containing integers.
 The array is either entirely comprised of odd integers or entirely comprised of even integers 
 except for a single integer N. 
 Write a method that takes the array as an argument and returns this "outlier" N. */

 console.clear();

 function findOutlier(integers){
    evenSum = 0;
    oddSum = 0;
    theOneEven = 0;
    theOneOdd = 0;

    for (i = 0; i < integers.length; i++){
        const integer = integers[i];
        
        if (integer % 2 === 0){
            console.log(integer, ' is even');
            evenSum++;
            theOneEven = integer;
        } else{
            console.log(integer, ' is odd');
            oddSum++;
            theOneOdd = integer;
        }

        if (((evenSum > 1) && (oddSum > 0)) || ((evenSum > 0) && (oddSum > 1))){
            const result = evenSum > oddSum ? theOneOdd : theOneEven;
            return result;
        }
    }
  }



 console.log(findOutlier([0, 1, 2]), 1);
 console.log(findOutlier([1, 2, 3]), 2);
 console.log(findOutlier([2,6,8,10,3]), 3);
 console.log(findOutlier([0,0,3,0,0]), 3);
 console.log(findOutlier([1,1,0,1,1]), 0);