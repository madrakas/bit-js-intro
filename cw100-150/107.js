console.clear();


function zero(arg) {
    return arg !== undefined ? Math.trunc(eval (0 + arg)) : 0;
}

function one(arg) {
    return arg !== undefined ? Math.trunc(eval (1 + arg)) : 1;
}

function two(arg) {
    return arg !== undefined ? Math.trunc(eval (2 + arg)) : 2;
}

function three(arg) {
    return arg !== undefined ? Math.trunc(eval (3 + arg)) : 3;
}

function four(arg) {
    return arg !== undefined ? Math.trunc(eval (4 + arg)) : 4;
}

function five(arg) {
    return arg !== undefined ? Math.trunc(eval (5 + arg)) : 5;
}

function six(arg) {
    return arg !== undefined ? Math.trunc(eval (6 + arg)) : 6;
}

function seven(arg) {
    return arg !== undefined ? Math.trunc(eval (7 + arg)) : 7;
}

function eight(arg) {
    return arg !== undefined ? Math.trunc(eval (8 + arg)) : 8;
}

function nine (arg) {
    return arg !== undefined ? Math.trunc(eval (9 + arg)) : 9;
}

function plus(arg) {
    return '+' + arg;;
}

function minus(arg) {
    return '-' + arg;;
}

function times(arg) {
    return '*' + arg;
}
function dividedBy(arg) {
    return '/' + arg;;
}

// console.log(seven(times    (five ())), 35);
console.log(four (plus     (nine ())), 13);
console.log(eight(minus    (three())),  5);
console.log(seven  (dividedBy(two  ())),  3);