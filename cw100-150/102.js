console.clear();


function validate(n){
    if (n.toString().length <2){
        return false;
    }
    let numbers = [];
    n.toString().split('').map(a => +a).reverse()
    .reduce((accu, val) => {
        if (++accu % 2  === 0){
            if (val * 2 > 9) {
                numbers.push((val * 2).toString().split('').map(a => +a).reduce((accu2, val2) => accu2 + val2));
            }else{
                numbers.push(val * 2);
            }
        }else{
            numbers.push(val);
        }
        return accu;
    }, 0 );
    // console.log(numbers);
    const finalSum = numbers.reduce((accu, val) => (accu + val), 0);
    // console.log(finalSum);
    return finalSum % 10 === 0;
}

// console.log(validate(123), false);
// console.log(validate(1), false);
// console.log(validate(2121), true);
console.log(validate(8675309), true);
// console.log(validate(1230), true);

9031738