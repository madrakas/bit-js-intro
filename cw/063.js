console.clear();

function expandedForm(number){
    let num = number + '';
    
    const nums = num
        .split('')
        .reverse()
        .map((n, i) =>( n * (10 ** i)))
        .filter(n => (n !== 0))
        .reverse()
        .join(' + ');
    return nums;
}

// console.log((expandedForm(12)), '10 + 2');
// console.log((expandedForm(42)), '40 + 2');
console.log((expandedForm(70304)), '70000 + 300 + 4');

