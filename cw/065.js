console.clear();

function twoSum(numbers, target) {
    const result =[];
    
    for (let i = 0; i < numbers.length; i++) {
        const num1=numbers[i];
        for (let i2 = 0; i2 < numbers.length; i2++) {
            if (i2 === i){
                continue;
            }
            const num2 = numbers[i2];
            // console.log(num1 + num2 ===target);
            (num1 + num2 === target) && result.push(i) && result.push(i2);
        }
    }
    return result;    
    

}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([1234, 5678, 9012], 14690));
console.log(twoSum([2, 2, 3], 4));
console.log(twoSum([2, 3, 1], 3));