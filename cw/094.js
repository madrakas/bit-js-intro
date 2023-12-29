console.clear();

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

function encode(string) {
    string = string.replaceAll('a', '1');
    string = string.replaceAll('e', '2');
    string = string.replaceAll('i', '3');
    string = string.replaceAll('o', '4');
    string = string.replaceAll('u', '5');
    return string;
  }
  
  function decode(string) {
    string = string.replaceAll('1', 'a');
    string = string.replaceAll('2', 'e');
    string = string.replaceAll('3', 'i');
    string = string.replaceAll('4', 'o');
    string = string.replaceAll('5', 'u');
    return string;
  }


  console.log(encode('How are you today?'));
  console.log(decode('H4w 1r2 y45 t4d1y'));

  