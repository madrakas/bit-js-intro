console.clear();


function solution(number){
    const rules= {
                    I: 1,
                    IV: 4,
                    V: 5,
                    IX: 9,
                    X: 10,
                    XL: 40,
                    L: 50,
                    XC: 90,
                    C: 100,
                    CD: 400,
                    D: 500,
                    CM: 900,
                    M: 1000,
    };

    let result='';
    (Object.keys(rules)).reverse().forEach(a => {
          
            result += a.repeat(parseInt((number / rules[a])));
            number -= parseInt((number / rules[a])) * rules[a];

        });
    return result;
}

/* 
  Symbol    Value
  I          1
  V          5
  X          10
  L          50
  C          100
  D          500
  M          1,000
 */


//  console.log(solution(1),  '1 should return "I"')
// console.log(solution(2),  '2 should return "II"')
// console.log(solution(3),  '3 should return "III"')
// console.log(solution(4),  '4 should return "IV"')
// console.log(solution(5),  '5 should return "V"')
// console.log(solution(9),  '9 should return "IX"')
// console.log(solution(10), '10 should return "X"')
// console.log(solution(11), '11 should return "XI"')
// console.log(solution(19), '19 should return "XIX"')
// console.log(solution(22), '22 should return "XXII"')
// console.log(solution(15), '15 should return "XV"')
// console.log(solution(1000), '1000 should, "M"')
// console.log(solution(1001), '1001 should, "MI"')
console.log(solution(1990), '1990 should, "MCMXC"')
// console.log(solution(2007), '2007 should, "MMVII"')
// console.log(solution(2008), '2008 should, "MMVIII"')