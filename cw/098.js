console.clear();

function pyramid(n) {
    const result = []; 
    for (let i = 0; i < n; i++) {
        const subArr = [];
        for (let x = 0; x < i + 1; x++){
            // console.log(x);
            subArr.push(1);
        }
        result.push(subArr);
    }
    return result;
}

// console.log((pyramid(0), []));
console.log((pyramid(1), [[1]]));
console.log (pyramid(1));
// console.log((pyramid(2), [[1], [1, 1]]));
// console.log((pyramid(3), [[1], [1, 1], [1, 1, 1]]));