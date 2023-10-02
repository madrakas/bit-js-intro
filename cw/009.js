
console.clear();

function squareDigits(num) {
    const numStr = ''+ num;
    resultStr = '';

    for (let i = 0; i < numStr.length; i++){
        resultStr += Number(numStr[i])**2;
    }
    return Number(resultStr);
}

console.log(squareDigits(9119));