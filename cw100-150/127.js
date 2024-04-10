console.clear();

function compose(f,g) {
    // Compose the two functions here!
    //should work with multiple arguments

    return function(...args){
        return f(g(...args));
    }

  }
  
  const add1 = function(a){return a + 1}
  const addAll3 = function(a,b,c){return a + b + c}
  console.log(compose(add1,addAll3)(1,2,3), 7 );
