
console.clear();
console.log('Labas');

const text = `
ma'a ma'a p''apa m'ama
papa papa zaza mama
mama papa`;


// 1. Rasti ne tuščių eilučių kiekį;
function countEmptyRows(text){
    const lines = text.split('\n');
    let emptyLines = lines.filter(e => '' === e);
    return emptyLines.length;
}
// console.log(countEmptyRows(text));


//2. Rasti žodžių kiekį;
function countWords(text){
    let txt = unbrakeLines(text);
    txt = removeNonAN(txt);
    const words = txt.split(' ');
    return words.length;
}
// console.log(countWords(text));

function unbrakeLines(text){
    let unbrokenTxt = text.replaceAll('\n', ' ');
    
    for (;unbrokenTxt.includes('  ');){
        unbrokenTxt = unbrokenTxt.replaceAll('  ', ' ');
    }
    return unbrokenTxt;
}

function removeNonAN(txt){
    const whiteList = "abcdefghijklmnopqrstuvwxyz' ";
    let letters = txt.split('');
    letters = letters.filter(letter => whiteList.includes(letter.toLowerCase()));
    let result = letters.join('')
    result = result.trim();
    return result;
}

//3. Rasti ilgiausia eilutę ir gražinti jos tekstą;
function longestLine(txt){
    // eilučių array

    let lines = txt.trim().split('\n');
   
    //eilučių ilgių array
    const lineLengths = [];
    for (const line in lines) {
        lineLengths.push(lines[line].length);
    }
       
    //randam max ilgį    
    let maxLength = 0;
        for (const lineLength in lineLengths){
        if (lineLengths[lineLength] > maxLength){
            maxLength = lineLengths[lineLength];
        }
    }
    
    //Filtruojam ilgiausias eilutas
    lines = lines.filter((a) => a.length === maxLength);
   
    return lines;
}
// console.log(longestLine(text));



//4. Rasti ilgiausios eilutės raidžių kiekį;
function longestLineLettersCount(txt){
    const longestlines = longestLine(txt);
    const result = [];
    for (const line in longestlines){
        let longestLine = (longestlines[line]);
        longestLine = removeNonAN(longestLine);
        longestLine = longestLine.replaceAll(' ');
        result.push(longestLine.length);
    }
    return result;
}
// console.log(longestLineLettersCount(text));

//5. Rasti dažniausiai pasikartojančia raidę (nepriklausomai ar ji didžioji, ar mažoji);
function mostCommonLetter(txt){
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let maxCount = 0;
    let maxLetters = [];
    const letterObj = {};
    const txtArr = txt.split('');
    for (const l in letters){
        const letterExtract = txtArr.filter( e => e.toLowerCase() === letters[l]);
        letterObj[letters[l]] = letterExtract.length;
        if (letterExtract.length > maxCount) {
        maxCount = letterExtract.length;
        }
    }
    // console.log(letterObj);
    
    for (const l in letterObj){
        if (letterObj[l] === maxCount) {
            maxLetters.push(l);
        }       
    }
    return maxLetters;
}
//  console.log(mostCommonLetter(text));

//6. Rasti dažniausiai pasikartojantį žodį (nepriklausomai ar jis su didžiosiomis, ar mažosiomis);
function mostCommonWord(text){
    let txt = unbrakeLines(text);
    txt = removeNonAN(txt);
    txt = txt.toLowerCase()
    const words = txt.split(' ');
    
    const wordObj = {};

    //susirenkam žodžius. Kol kas neskaičiuojam.
    for (const w in words){
        wordObj[words[w]] = 0;
    }
    
    let maxLength = 0;
    let maxWords = [];

    //einam per unikalius žodžius ir ieškom didžiausio ilgio.
    for (const w in wordObj) {
        //objekto nariams priskiriame skaičius kiek žodis pasikartoja
        const wordExtract = words.filter( a => a === w);
        wordObj[w] = wordExtract.length;
        // ieškome didžiausio pasikartojimo
        if (wordExtract.length > maxLength){
            maxLength = wordExtract.length;
        } 

    }

    //surenkam žodžius kurie kartojasi didžiausiai kartų
    for (const w in wordObj) {
        if (wordObj[w] === maxLength){
            maxWords.push(w);
        }
    }
    return maxWords;
}
// console.log(mostCommonWord(text));

//7. Rasti unikalių raidžių kiekį;
function countUniqueLetters(text){
    const uniqueLetters = [];
    let txt = text.toLowerCase();
    txt = removeNonAN(txt);
    txt = txt.replaceAll(' ', '');
    for(const c in txt){
        if (!uniqueLetters.includes(txt[c])){
            uniqueLetters.push(txt[c]);
        }
    }
     return uniqueLetters.length;
}
// console.log(countUniqueLetters(text));

//8. Rasti unikalių žodžių kiekį;
function countUniqueWords(text){
    const uniqueWords = [];
    let txt = unbrakeLines(text);
    txt = removeNonAN(txt);
    txt = txt.toLowerCase();
    const words = txt.split(' ');
    
    for(const w in words){
        if (!uniqueWords.includes(words[w])){
            uniqueWords.push(words[w]);
        }
    }
      return uniqueWords.length;
}
// console.log(countUniqueWords(text));

//9. Rasti žodžių su apostrofu kiekį;
function countStropedWords(text){
    let uniqueWords = [];
    let txt = unbrakeLines(text);
    // txt = removeNonAN(txt);
    txt = txt.trim();
    txt = txt.toLowerCase();
    const words = txt.split(' ');
    
    for(const w in words){
        if (words[w].includes("'") && !(uniqueWords.includes(words[w]))){
            uniqueWords.push(words[w]);
        }
    }
      return uniqueWords.length;
}
// console.log(countStropedWords(text));
