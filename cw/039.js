//k8 min max

function differenceInAges(ages){
    minAge = ages[0];
    maxAge = ages[0];

    for (let i = 0; i < ages.length; i++) {
        if (ages[i] > maxAge){
            maxAge = ages[i];
        }
        
        if (ages[i] < minAge){
            minAge = ages[i];
        }
        
    }

    return [minAge, maxAge, maxAge - minAge];
}


console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);