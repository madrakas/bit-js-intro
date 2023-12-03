// Exclamation marks series #3: Remove all exclamation marks from sentence except at the end!
console.clear();

function remove (a) {
    let n = 0;
    for (let i = a.length-1; i >= 0; i--){
        if (a[i] === '!'){
            n++;
        }else{
            i = 0;
        }
    }
    const b = '!'.repeat(n);
    a = a.replaceAll('!', '') + b;
    return a;
}



console.log(remove("Hi!"), " | Hi!");
console.log(remove("Hi!!!"), " | Hi!!!");
console.log(remove("!Hi"), " | Hi");
console.log(remove("!Hi!"), " | Hi!");
console.log(remove("Hi! Hi!"), " | Hi Hi!");
console.log(remove("Hi"), " | Hi");


console.log ('!'==='!');