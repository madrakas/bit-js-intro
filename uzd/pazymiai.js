console.clear();

const marks0 = [10, 2, 8, 4, 6];
const marks1 = [10, 2, 8, 'a', 4, 6];
const marks2 = [];
//const marks3 = [10, 2, 8, 'a', 4, 6, true, false, null, NaN]; // 
const marks3 = [10, -2, 2, 3.14, 8, 2.727, 0, 80, 99, 120, 4, 6, NaN];
const marks4 = 'labas';
const marks5 = '';




 function marksAverage(marksList) {

    if (marksList.length > 0 ){
        return
    }
    let totalSum = 0;
    let count = 0;
    for (let i = 0; i < marksList.length; i++){
        
        if (typeof marksList[i] != 'number' 
            || (marksList[i] % 1) != 0
            || marksList[i] > 10 
            //|| !Number.isInteger(marksList[i])
            || marksList[i] === 0)
            {
            // return 'Error';

            continue;
        } 

        
        
        
        //3.14 includes('.') - > true
        //##### reikia pabaigti
        //3.14 
        //3.14 
        // parseInt ('3.14') === 3.14 -> 3 === 3.14 -> false
        //parseFloat('3.14') === 3.14 -> 3.14 -> true
        
// #####  reikia pabaigti
        
        totalSum += marksList[i];    
        count ++;
    }
    const average =totalSum / count;

    return count ? average : 'Neiskaityta';
    
} 


//skaičiuosim vidurkį

/* let totalSum = 0;
let count = 0;

for (let i = 0; i < marks0.length; i++){
    if (typeof marks0[i] === 'number'){
        totalSum += marks0[i];    
        count ++;
    }
    
}
console.log(totalSum);
console.log(count);
console.log(marks0.length); 

const average = totalSum /count;*/


console.log(marksAverage(marks0), '->', 6);
console.log(marksAverage(marks1), '->', 6);
console.log(marksAverage(marks2), '->', 'Neskaityta');

