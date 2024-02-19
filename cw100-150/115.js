console.clear();

function presses(phrase) {
    const keys =       ['1', 'A', 'B', 'C', '2', 'D', 'E', 'F', '3', 'G', 'H', 'I', '4', 'J', 'K', 'L', '5', 'M', 'N', 'O', '6', 'P', 'Q', 'R', 'S', '7', 'T', 'U', 'V', '8', 'W', 'X', 'Y', 'Z', '9', '*', ' ', '0','#'];
    const keyPresses = [ 1,   1,   2,   3,   4,   1,   2,   3,   4,   1,   2,   3,   4,   1,   2,   3,   4,   1,   2,   3,   4,   1,   2,   3,   4,   5,   1,   2,   3,   4,   1,   2,   3,   4,   5,   1,   1,   2,  1];
    
    const input = phrase.toUpperCase();
    
    return input.split('').map(a => keyPresses[keys.indexOf(a)]).reduce((accu, val) => accu + val);
  }

//   console.log(presses('LOL'    ),  9);
//   console.log(presses('HOW R U'), 13);

  console.log(presses('0123456789'), 56);