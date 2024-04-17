console.clear();

var nbrOfLaps = function (x, y) {

    let s1 = 0;
    let s2 = 0;
    
    while (true) {
        s1++;
        s2++;
        if (s1%x === 0 && s2%y === 0) {
            return [s1/x, s2/y];
        }
    }
}

// console.log(nbrOfLaps(5, 3), [3,5])
// console.log(nbrOfLaps(4, 6), [3,2])
// console.log(nbrOfLaps(5, 5), [1,1])