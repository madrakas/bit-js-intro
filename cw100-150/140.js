
console.clear();
function level3SortByOccurrences(sentence) {
    const whitelist = 'abcdefghijklmnopqrstuvwxyz1234567890 ';
    const cleanWords = sentence.split('')
    .map(a => a.toLowerCase())
    .filter(a => whitelist.includes(a))
    .join('').split(' ');
    
    const words = {};
    
    cleanWords.forEach(word => {
      if (words[word]){
        words[word]++;
      }else{
        words[word] = 1;
      }
    });
    
    const wordsArr = [];
    
    Object.keys(words).forEach(key => {
      wordsArr.push({
        'word':key,
        'count':words[key]
      });
    });
    
    wordsArr.sort((a, b) => b.count - a.count || a.word.localeCompare(b.word));
    // console.log(wordsArr);
  
    // Write your code here
    return wordsArr;
  }

  console.log(level3SortByOccurrences('The quick brown fox jumps over the lazy dog'));
