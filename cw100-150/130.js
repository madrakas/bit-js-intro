console.clear();

function longestRepetition(s) {
    
    let charCount = 0;
    let maxCount = 0;
    let maxChar = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i - 1]){
            charCount ++;
        } else {
            charCount = 1;
            char = s[i];
        }

        if (charCount > maxCount) {
            maxCount = charCount;
            maxChar = s[i];
        }
    }
    return [maxChar, maxCount]
}

  console.log( longestRepetition("aaaabb"),      ["a",4] );
  console.log( longestRepetition("bbbaaabaaaa"), ["a",4] );
//   console.log( longestRepetition("cbdeuuu900"),  ["u",3] );
//   console.log( longestRepetition("abbbbb"),      ["b",5] );
//   console.log( longestRepetition("aabb"),        ["a",2] );
//   console.log( longestRepetition(""),            ["",0] );
//   console.log( longestRepetition("ba"),          ["b",1] );