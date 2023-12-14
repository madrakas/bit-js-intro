console.clear();

// Return the output array, and ignore all non-op characters

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array


function parse( data ){
    let fish = 0;
    const result = [];
    
    const instructions = {
        i: () => {fish++},
        d: () => {fish--},
        s: () => {fish = fish **2},
        o: () => {result.push(fish)},
     }
    
    data.split('').forEach(symbol => {
        if (Object.keys(instructions).includes(symbol)){
            instructions[symbol]();
        }
    });

    return result;
}




console.log(parse("iiisdoso"), [ 8, 64 ] );
console.log(parse("iiisxxxdoso"), [ 8, 64 ] );