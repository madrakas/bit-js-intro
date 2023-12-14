console.clear();

function race(v1, v2, g) {
    if (v2 - v1 <= 0) {
        return null;
    }

    const speedfiff = v2 - v1;
    

    const time = parseInt((g / speedfiff) * 3600); //feet/hour

    const hours = (time /3600) - (time / 3600) % 1  ;
    
    
    const minutes = ((time - (hours * 3600)) / 60) - ((time - (hours * 3600)) / 60) %1 ;
    

    const seconds = (time - (hours * 3600) - minutes * 60);
    
    return ([time, hours, minutes, seconds]);

}


console.log(race(720, 850, 70), [0, 32, 18]);
console.log(race(80, 91, 37), [3, 21, 49]);
console.log(race(80, 100, 40), [2, 0, 0]);
console.log(race(720, 850, 37), [0, 17, 4]);