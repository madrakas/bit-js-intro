console.clear();

function deepCount(a){
    console.log(a);
    let counter = 0;
    return recursive(a, counter);
}

function recursive(a, counter){
    a.forEach(item => {
        if (Array.isArray(item)) {
            counter++;
            counter = recursive(item, counter);
        }else{
            console.log(item);
            counter++;
        }
    });
    return counter;
}


// console.log(deepCount([]), 0, "Expected 0");
// console.log(deepCount([1, 2, 3]), "Expected 3");
// console.log(deepCount(["x", "y", ["z"]]), 4, "Expected 4");
// console.log(deepCount([1, 2, [3, 4, [5]]]), 7, "Expected 7");
// console.log(deepCount([[[[[[[[[]]]]]]]]]), 8, "Expected 8");