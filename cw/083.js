console.clear();


function goodVsEvil(good, evil){

    const goodGuys = [1, 2, 3, 3, 4, 10];
    const badGuys = [1, 2, 2, 2, 3, 5, 10];

    let ggscore = 0;
    let bgscore = 0;
    good.split(' ').forEach((element, idx) => {ggscore += element * goodGuys[idx]});
    evil.split(' ').forEach((element, idx) => {bgscore += element * badGuys[idx]});

    return ggscore > bgscore ? 'Battle Result: Good triumphs over Evil' : bgscore > ggscore ? 'Battle Result: Evil eradicates all trace of Good' : 'Battle Result: No victor on this battle field';

}


console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'), 'Battle Result: Evil eradicates all trace of Good');
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'), 'Battle Result: Good triumphs over Evil');
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'), 'Battle Result: No victor on this battle field');