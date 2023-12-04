console.clear();

function titleCase(title, minorWords) {
    if (title===''){
        return '';
    }
    minorWords = (minorWords + '').toLowerCase().split(' ');
    // console.log('minorWords', minorWords);
    return title.split(' ').map((word, widx) => (properCase(word, widx, minorWords))).join(' ');
}


function properCase(string, widx, minorWords){
    // console.log(string, widx, minorWords.includes(string.toLowerCase()));
    if (widx > 0 && minorWords.includes(string.toLowerCase())){
        return string.toLowerCase();
    }

    return string.toLowerCase().split('').map((l, lidx) => (lidx === 0 ? l.toUpperCase() : l )).join('');
    
}





// console.log(titleCase(''), '')
// console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings');
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
// console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox')