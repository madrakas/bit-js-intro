console.clear();

function createFunctions(n) {
    const callbacks = [];
  
    for (var i=0; i<n; i++) {
        // const fn = () => i;
        callbacks.push(new Function('return ' + i));
    }
    return callbacks;
}

function cloneFunction (originalFn) {
    let originalFnStr = originalFn.toString();
    let cloneFn = new Function('return ' + originalFnStr);
    return cloneFn();
}


    const callbacks = createFunctions(5);
  console.log(callbacks[2]());