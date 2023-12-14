console.clear();

function sqInRect(lng, wdth){
    if (lng === wdth){return null}
    
    let result = [];

    // while (lng + wdth > 0) {
        for (let i = 0; lng !==0 && wdth !==0; i++){
            if (lng > wdth) {
                result.push(wdth);    
                lng -= wdth;
            }else{
                result.push(lng);    
                wdth -= lng;
            }
        }

    // console.log(result);

    if (result.length === 0) {
        return null;
    } else {
        return result;
    }
}


// console.log(sqInRect(5, 5), null);
// console.log(sqInRect(5, 3), [3, 2, 1, 1]);
// console.log(sqInRect(3, 5), [3, 2, 1, 1]);
console.log(sqInRect(20, 14), [14, 6, 6, 2, 2, 2]);


console.log(5 % 3);