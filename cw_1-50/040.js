//k6
console.clear();

function findEvenIndex(arr)
{
    
    for (let i = 0; i < arr.length; i++) {
        
        const left = arr.slice(0, i);
        const right = arr.slice((arr.length - i - 1) * - 1) ;
        
        // console.log(`Arr0: ${arr}`);
        console.log(`left: ${left}`);
        console.log(`right: ${right}`);
        
        
        let rightSum = 0;
        if (right.length < arr.length){
            rightSum = ArrSum(right);
        }

        let leftSum = 0;
        if (left.length > 0){
            leftSum = ArrSum(left);
        }
        
         console.log('------------');
         console.log(`${i}: ${leftSum} | ${rightSum} |L: ${left} |R: ${right} `);
         console.log('------------');
        
        
         if(rightSum === leftSum){
                return i; 
        }
    }
    

    return -1;
}

function ArrSum(numbers){
    let result= 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}


 //console.log(findEvenIndex([20,10,-80,10,10,15,35]),3, "The array was: [1,2,3,4,5,6,7] \n");
 //console.log(findEvenIndex([1,2,3,4,5,6,7,8]),3, "The array was: [1,2,3,4,5,6,7] \n");
   console.log(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
  //console.log(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
  //console.log(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
//console.log(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");

//console.log(findEvenIndex([10,-80,10,10,15,35,20]), 6);