
console.clear();
//Rimantas
// const input = '402118981140319273661908409619365869589931925152226605792653837238728310846968618162511391999893812224945858513475313944022455267266565495711080731592814982072'; 

//Arvydas
const input = '30183972527658406801343362043374752129149112270924354906521386532288151078501464601747081443627140042546451390863890126682461190601246942941529653400074151';

const pairs = [];

for (let index = 0; index < input.length -1; index++) {
    const element = input[index] + input[index + 1];
    if (!pairs.includes(element)){
        pairs.push(element);
    }
}



let maxPairCount = 0;

const pairsObj ={}

for (let i1 = 0; i1 < pairs.length; i1++) {
    const pair = pairs[i1];
    let pairCount = 0;
    for (let i2 = 0; i2 < input.length - 1; i2++) {
        const element = input[i2] + input[i2 + 1];
        // console.log(pair+' vs ' + element);
        if (element === pair) {
            pairCount++;
        }
    }
    
    
    pairsObj[pair] = pairCount;
    if (pairCount > maxPairCount) {
        maxPairCount = pairCount
    }
}

const maxPairs = [];

for (const i in pairsObj){
    if (pairsObj[i] === maxPairCount) {
        maxPairs.push(i);
    }       
}



// console.log(maxPairCount); 
// console.log(pairsObj);
console.log(maxPairs, maxPairCount);
