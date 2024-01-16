console.clear();

function highestRank(arr){
    const ranks = {};
    arr.forEach(num => {ranks[num] ? ranks[num]++ : ranks[num] = 1});
    let maxVal = 0;
    let maxKeys = [];
    Object.entries(ranks).forEach(val => (val[1] > maxVal ? maxVal = val[1] : maxVal));
    Object.entries(ranks).forEach(val => (val[1] === maxVal ? maxKeys.push(val[0]) : maxKeys));
    return +maxKeys.sort((a, b) => b - a)[0];  
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));