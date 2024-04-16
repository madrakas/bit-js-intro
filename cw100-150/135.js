console.clear();

function foldArray(array, runs)
{

    while (runs > 0) {
        console.log('run: ', runs);
                
        // arr1 will contain first half of array
        const arr1 = array.slice(0, Math.ceil(array.length / 2));
        console.log(arr1);
        // arr2 will contain second half of array
        const arr2 = array.slice(Math.ceil(array.length / 2));
        console.log(arr2);

        // take out last elemetn of arr1 if lengths are not equal
        let last = null;
        if (arr1.length !== arr2.length) {
            last = arr1.pop();
        }
        
        //prepare arr2 for folding
        arr2.reverse();

        // sum arr1 and arr2
        const arrSum = []
        for (let i = 0; i < arr1.length; i++) {
            arrSum.push(arr1[i] + arr2[i]);
        }

        if (last !== null) {
            arrSum.push(last);
        }
        console.log(arrSum);
        array = arrSum;
        runs--;
    }
    return array;
}


// console.log(foldArray([1, 2, 3, 4, 5], 1), [ 6, 6, 3 ]);
// console.log(foldArray([1, 2, 3, 4, 5], 2), [ 9, 6 ]);
// console.log(foldArray([1, 2, 3, 4, 5], 3), [ 15 ]);
console.log(foldArray([ -9, 9, -8, 8, 66, 23 ], 1), [ 14, 75, 0 ]);

