console.clear();

function findNb(m) {
    let i = 1;
    for (let volume = m; volume > 0 ; i++) {
        volume -= i ** 3;
        if (volume < 0)  {
            return -1;
        }
    }
        return i - 1;
}


console.log(findNb(1071225), 45)
//  console.log(findNb(4183059834009), 2022)
// console.log(findNb(24723578342962), -1)
// console.log(findNb(135440716410000), 4824)
// console.log(findNb(40539911473216), 3568)


//n3+(n−1)3+(n−2)3+...+13=m n^3 + (n-1)^3 + (n-2)^3 + ... + 1^3 = m n3+(n−1)3+(n−2)3+...+13=m

console.log(3**3, 2*3, 1, '|', 3**3 + 2*3 + 1);
