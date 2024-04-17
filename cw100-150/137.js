console.clear();

const addOne = (a) => a + 1
const multTwo = (b) => b * 2

function compose() {

    let functions = Array.from(arguments);
    
    if (functions.length === 0) return () => {};
    if (functions.length === 1) return functions[0];
    
    return functions.reduce((accu, val) => (...args) => accu(val(...args)))
}

// console.log(compose(multTwo, addOne)(5), 12, 'compose two functions');
console.log(compose(addOne, multTwo, addOne, addOne)(2), 9, 'compose four functions')
// console.log(compose(addOne)(3), 4, 'compose one function')
// console.log(compose()(10), 10, 'compose no functions')


