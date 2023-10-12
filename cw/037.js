console.clear();

function correctPolishLetters (str) {
    const result = str.split('');
    const repList = ['ą', 'a', 'ć', 'c', 'ę', 'e', 'ł', 'l', 'ń', 'n', 'ó', 'o', 'ś', 's', 'ź', 'z', 'ż', 'z'];
    for (let i1 = 0; i1 < result.length; i1++){
      console.log(result[i1]);
      for (let i2 = 0; i2 < repList.length; i2 += 2){
          if (result[i1] === repList[i2]){
            result[i1] = repList[i2 + 1];
          }
        }
    }
    return result.join('');
  }


console.log(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
// console.log(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
// console.log(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");