console.clear();

const records =[[46828479, 347152214061471]];
// const records =[[7, 9]];

let multi = 1;

function racedistances(time, record){
    const result = {};
    for (let holdtime = 1; holdtime < time; holdtime++) {
        const distance = ((time - holdtime) * holdtime);
         if (distance > record){
            result[holdtime] = distance;
         }
        
    } 
    return result;
}

records.forEach((r, ridx) => {
    const result = ('race:' + ridx, racedistances(r[0], r[1]));
     multi = multi * Object.keys(result).length;
});

console.log(multi);
    



