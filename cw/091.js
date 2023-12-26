console.clear();

function findMissing(list) {  
    const difs = {};

    for (let i = 0; i < list.length - 1; i++) {
        difs[list[i + 1] - list[i]] = i;
    }
        
    const maxDif = ((Object.keys(difs).sort((a, b) => (b - a)))[0]);
    const minDif = ((Object.keys(difs).sort((a, b) => (b - a)))[1]);
    const maxDifPos = difs[maxDif];
    const minDifPos = difs[minDif];
    let result = 0;
    if (parseInt(minDif) > 0) {
        result = list[maxDifPos] + parseInt(minDif);
    } else {
        result = list[minDifPos] + parseInt(maxDif);
    }
    return result;
}

console.log(findMissing([-1, -3, -4]));