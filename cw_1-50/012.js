//k6

console.clear();

function likes(names) {
    let likesStr = '';
    if(names.length === 0) {
        likesStr = 'no one likes this';
    } else if (names.length === 1) {
        likesStr = names[0] + ' likes this';
    } else if (names.length < 4){
        likesStr = names[0];
        for (i = 1; i < names.length - 1; i++){
            console.log(i);
            likesStr += ', ' + names[i];
        }
        likesStr += ' and ' + names[names.length-1] + ' like this'; 
    } else {
        likesStr = names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
        
    }
    return likesStr;
}



   console.log(likes([]), 'no one likes this');
   console.log(likes(['Peter']), 'Peter likes this');
   console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
   console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
   console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');  


   'Jacob and Alex likes this'
   'Jacob and Alex like this'