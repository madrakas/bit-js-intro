console.clear();

function pascalsTriangle(n) {
    const resultArr = [];

    for (let i = 0; i < n; i++) {
        console.log('level' + i);
        if (i === 0) {
            resultArr.push([1]);
        } 

        if (i === 1) {
            resultArr.push([1,1]);
        }

        if (i > 1) {
            const tempArr = [1];
            for (let j = 0; j < resultArr[i - 1].length - 1; j++) {
                tempArr.push(resultArr[i - 1][j] + resultArr[i - 1][j + 1]);
            }
            tempArr.push(1);
            resultArr.push(tempArr);
        }
    }

    //flatten array 
    return resultArr.flat();
}

console.log(pascalsTriangle(4), [1,1,1,1,2,1,1,3,3,1],"4 level triangle incorrect");

