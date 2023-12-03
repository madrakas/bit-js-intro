console.clear();

const arr = [10, 10, 10, 10, 10, 10 ];
const arr2 = [20, 20, 20, 20, 20];

function avr(params) {
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
       sum += params[i];
    }
    return sum/params.length;
}

const group1 = avr(arr);

const group2 = avr(arr2);

 

console.log(group1, group2);
