console.clear();

function dataReverse(data) {
    let result = [];
    for (let i = 0; i < data.length; i += 8) {
        result.push((data.slice(i, i + 8)));
    }
    result.reverse();
    return result.flat(1);
}
console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));