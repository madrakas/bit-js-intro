//k6

/* Implement the function unique_in_order which takes as argument a sequence and returns 
a list of items without any elements with the same value next to each other and preserving the original order of elements. */

console.clear();

function uniqueInOrder(iterable){
    if (iterable.length === 0){
        return [];

    }
    
    let iterableArr =[];
    
    if (Array.isArray(iterable)){
        iterableArr = iterable;
    }else{
        iterableArr =iterable.split('');
    }
    let newArr = [iterableArr[0]];
    let previous =iterableArr[0];

    for (i = 1; i < iterableArr.length; i++){
        if (iterableArr[i] === previous){
            continue;
        }
        newArr.push(iterableArr[i]);
        previous = iterableArr[i];
    }
    return newArr;
}




console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
console.log(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D']);
console.log(uniqueInOrder([1,2,2,3,3]), [1,2,3]);
console.log(uniqueInOrder([]), []);
