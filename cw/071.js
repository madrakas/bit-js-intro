console.clear();

function solution (roman) {
    const rules= {
        CM: 900,
        CD: 400,
        XC: 90,
        XL: 40,
        IX: 9,
        IV: 4,
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    };
   
    let result= 0;
    (Object.keys(rules)).forEach(a => {
        
        let mulitplier = 0;
        
        for (;roman.includes(a);) {
            
            mulitplier++;
            roman= roman.replace(a, '');        
        }
        result += rules[a] * mulitplier;
        
    });
    
    return result;
  }



console.log(solution('XXI'), 21);
console.log(solution('I'), 1);
console.log(solution('IV'), 4);
console.log(solution('MMVIII'), 2008);
console.log(solution('MDCLXVI'), 1666);