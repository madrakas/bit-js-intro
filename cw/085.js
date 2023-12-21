console.clear();

function revrot(numStr, chunk){
    if (chunk < 1){
        return '';
    }
    result = '';
    for (let i = 0; i < numStr.length; i += chunk) {
        if (i + chunk > numStr.length){
            break;
        }
        chunkStr = (numStr.slice(i, i + chunk));
        result += chunkStr.split('').reduce((accumulator, currentValue) => {
            return accumulator + parseInt(currentValue) ** 3;
        }, 0) % 2 === 0
        ? chunkStr.split('').reverse().join('') 
        : chunkStr.slice(1, chunk) + chunkStr[0];
    }
    return result;
}

// console.log(revrot("123456987654111222333", 6),  "234561876549");
// console.log(revrot("123456987654", 6), "234561876549");
// console.log(revrot("123456987653", 6), "234561356789");
// console.log(revrot("66443875", 4), "44668753");
// console.log(revrot("66443875", 8), "64438756");
// console.log(revrot("664438769", 8), "67834466");
// console.log(revrot("123456779", 8), "23456771");
// console.log(revrot("", 8), "");
// console.log(revrot("123456779", 0), "" );
console.log(revrot("563000655734469485", 4), "0365065073456944");