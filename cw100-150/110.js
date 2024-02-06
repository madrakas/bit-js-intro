console.clear();

function numberOfPairs(gloves)
{
    const glovesCounter = {};
    pairsCounter = 0;
  
    gloves.forEach(glove =>{ void 0 !== glovesCounter[glove] ? glovesCounter[glove]++ : glovesCounter[glove]=1 });
    Object.keys(glovesCounter).forEach(color => pairsCounter += (glovesCounter[color] / 2) - (glovesCounter[color] / 2) % 1);
    return pairsCounter;
}



// console.log(numberOfPairs(['red','red', 'green']),1)
// console.log(numberOfPairs(['red','green','blue']),0)
console.log(numberOfPairs(['gray','black','purple','purple','gray','black']),3)