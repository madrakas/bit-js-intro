console.clear();


function toWeirdCase (string){
    
    return string.split(' ').map((word) => (word.split('').map((char, idx) => (idx % 2 ? char.toLowerCase() : char.toUpperCase())).join(''))).join(' ');

}


  console.log(toWeirdCase('This'), 'ThIs');
  console.log(toWeirdCase('is'), 'Is');
  console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
  