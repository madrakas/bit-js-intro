console.clear();

function matrixAddition(a, b){
    return a.map((col, idx) => {
        return col.map((val, idy)=> val + b[idx][idy]);
    });
}

 console.log(matrixAddition([ [1, 2],  [1, 2] ],
    //    +
[ [2, 3],  [2, 3] ] ), 
//    =
[ [3, 5], [3, 5] ] );