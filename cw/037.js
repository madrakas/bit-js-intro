console.clear();

function correctPolishLetters (str) {
    let result = str.replaceAll('ą', 'a' ) ;
    result = result.replaceAll('ć', 'c' ) ;
    result = result.replaceAll('ę', 'e' ) ;
    result = result.replaceAll('ł', 'l' ) ;
    result = result.replaceAll('ń', 'n' ) ;
    result = result.replaceAll('ó', 'o' ) ;
    result = result.replaceAll('ś', 's' ) ;
    result = result.replaceAll('ź', 'z' ) ;
    result = result.replaceAll('ż', 'z' ) ;
  return result;
  }


console.log(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");