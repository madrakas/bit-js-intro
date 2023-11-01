console.clear();
 

function sortArray(array) {
    const odds = [];
    const evens = [];
    const result = [];
    let o = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0){
            evens.push(array[i]);
            
        }else{
            odds.push(array[i]);
            evens.push(null);
        }
    }
    odds.sort(function(a, b) {
        return a - b;
    });
    
    
    for (let i = 0; i < evens.length; i++) {
        if (evens[i] === null){
            result.push(odds[o++]);
        }else{
            result.push(evens[i]);
        }
    }

    return result;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]),[]);