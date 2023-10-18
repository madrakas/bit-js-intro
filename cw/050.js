console.clear()

function towerBuilder(nFloors) {
    
    
    const result = [];
    let spaceCount = nFloors - 1;

    for (let i = 1; i < nFloors * 2; i += 2){
        result.push(' '.repeat(spaceCount) +'*'.repeat(i) + ' '.repeat(spaceCount));
        spaceCount--;
    }
  return result;
  }


console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ","***"]);
console.log(towerBuilder(3), ["  *  "," *** ","*****"]);







/* 
[
  "   *   ",
  "  ***  ", 
  " ***** "
  "*******"
]

*/