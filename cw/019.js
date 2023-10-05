// k6
/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order. */ 

console.clear();

function arrayDiff(a, b) {
    let result =[];

    if (a.length === 0){
        return [];
    }
    if (b.length === 0){
        return a;
    }

    
    for (let i1 = 0; i1 < a.length; i1++){
        console.log('-----------');
        const subjectFroma = a[i1];
        let kill = false;
        for (let i2 = 0; i2 < b.length; i2++){
            const killerFromb = b[i2];
            console.log(killerFromb,  'vs', subjectFroma);
            if (subjectFroma === killerFromb){
                kill = true;
                console.log('kill!');
            }
        }
        if (!kill){
            result.push(subjectFroma);
        }
        
    }
    return result;
}

console.log(arrayDiff([1,2], [1]), [2]);
console.log(arrayDiff([1,2,2], [1]), [2,2]);
console.log(arrayDiff([1,2,2], [2]), [1]);
console.log(arrayDiff([1,2,2], []), [1,2,2]);
console.log(arrayDiff([], [1,2]), []);
console.log(arrayDiff([1,2,3], [1,2]), [3]);


const x = [1];
const y = [1];
console.log(x === y); // false