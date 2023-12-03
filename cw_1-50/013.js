//k6

console.clear();

function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}

function findOdd(a) {
    result = 0;
    a1 = a.filter(onlyUnique);
    
  //  console.log(a1);

    for (let i = 0; i < a1.length; i++){
        // console.log(`a1[${i}]: ` + a1[i] + '\n\r-------------');
        
        let n = 0;

        for (let i2 = 0; i2 < a.length; i2++){
            
            
            if (a1[i] === a[i2]){
                n++;
                
            }

            // console.log('\t' + `a1[${i}]: ` + a1[i] + ` | a[${i2}]: ` + a[i2]    )
        }

        // console.log('-----------------\n\rn = ' + n + ' | n % 2 = ' + (n % 2) + '\n\r-----------------');

        if (n % 2 > 0) {
            result = a1[i];
        }

    }
     return result;
}


console.log(findOdd([7]), 7);
console.log(findOdd([0]), 0);
console.log(findOdd([1,1,2]), 2);
console.log(findOdd([0,1,0,1,0]), 0);
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]), 4);
 console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
 console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]), -1);
 console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5);
 console.log(findOdd([10]), 10);
 console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1],), 10);
 console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]), 1);