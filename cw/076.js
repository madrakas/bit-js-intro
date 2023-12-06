console.clear();

multiplicationTable = function(size) {
    const result = [];
    let tmpArr =[];
    for (let i = 1; i <= size; i++) {
        tmpArr.push(i)
    }
    
    result.push(tmpArr);
    for (let i = 1; i <= size -1; i++) {
        // console.log(result[i-1]);
        result.push(result[i - 1].map((element, eidx) =>(element + result[0][eidx])));
    }

    return result;
    
}

console.log(multiplicationTable(3));

    // console.log(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);



    // 1 2 3
    // 2 4 6
    // 3 6 9