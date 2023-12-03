
console.clear();
function initializeNames(name){
    nameArr = name.split(' ');
    let result = '';
    for(let i = 0; i <= nameArr.length - 1; i++ ){
        if(i ===0){
            result = nameArr[i];
        } else if( i === nameArr.length - 1){
            result += ' ' + nameArr[i];
        } else {
            result += ' ' + nameArr[i][0] + '.';
        }
    }
    return(result);
}


console.log(initializeNames('Jack Ryan'), 'Jack Ryan');
console.log(initializeNames('Lois Mary Lane'), 'Lois M. Lane');
console.log(initializeNames('Dimitri'), 'Dimitri','');
console.log(initializeNames('Alice Betty Catherine Davis'), 'Alice B. C. Davis');