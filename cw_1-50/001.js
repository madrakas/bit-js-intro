// Clocky Mc Clock-Face

console.clear();

function clock (angle) {
    // Your code here
 /*        const hourNum = angle / 30;
        const minNum = (angle / 30)/7;
        hourStr = hourNum + '';
    

    if (hourStr.length < 2){
        hourStr = '0' + hourStr;
    }
    return (`${hourStr}:${minNum}`); */

    let hours = Math.floor(angle / 30);  
    let minutes = (angle % 30) * 2;
    
    if (hours < 1) {
        hours += 12;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    return `${hours}:${minutes}`;  
    
  }

console.log('30: ', clock(30));
console.log('15: ', clock(15));
console.log('40: ', clock(40), '01:20', (clock(40)==='01:20'));
console.log('45: ', clock(45), '01:30', (clock(45)==='01:30'));

console.log('50: ', clock(50));
console.log('60: ', clock(60));
console.log('70: ', clock(70));
