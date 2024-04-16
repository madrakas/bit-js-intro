console.clear();

function toNato(words) {
    // you can access the preloaded NATO dictionary
const nato = { }
    nato['a'] = 'Alfa';
    nato['b'] = 'Bravo';
    nato['c'] = 'Charlie';
    nato['d'] = 'Delta';
    nato['e'] = 'Echo';
    nato['f'] = 'Foxtrot';
    nato['g'] = 'Golf';
    nato['h'] = 'Hotel';
    nato['i'] = 'India';
    nato['j'] = 'Juliett';
    nato['k'] = 'Kilo';
    nato['l'] = 'Lima';
    nato['m'] = 'Mike';
    nato['n'] = 'November';
    nato['o'] = 'Oscar';
    nato['p'] = 'Papa';
    nato['q'] = 'Quebec';
    nato['r'] = 'Romeo';
    nato['s'] = 'Sierra';
    nato['t'] = 'Tango';
    nato['u'] = 'Uniform';
    nato['v'] = 'Victor';
    nato['w'] = 'Whiskey';
    nato['x'] = 'Xray';
    nato['y'] = 'Yankee';
    nato['z'] = 'Zulu';
    nato['1'] = 'One';
    nato['2'] = 'two';
    nato['3'] = 'three';
    nato['4'] = 'four';
    nato['5'] = 'five';
    nato['6'] = 'six';
    nato['7'] = 'seven';
    nato['8'] = 'eight';
    nato['9'] = 'nine';
    nato['0'] = 'zero';
    nato['?'] = '?';
    nato['!'] = '!';
    nato[','] = ',';
    nato['.'] = '.';
    nato[' '] = '';

    const iLast = words.split('').length -1;

    let result = words.split('').map((a, i) => {
        
        return a !== ' ' ? nato[a.toLowerCase()] + ' ' :  '';
        })
        .join('');

    result = result.substring(0, result.length - 1);

    return result;
}




console.log(toNato('If you can read'),'India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta');
