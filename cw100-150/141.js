console.clear();

// https://www.codewars.com/kata/526a569ca578d7e6e300034e


function convert(input, source, target) {
    console.log(input, source, target);
  
      
  //  Count generic amount of units in input
      let genericValue = 0;
      const inputArr = input.split('');
  
      let multiplier = 1;
      for (let i = inputArr.length -1; i > -1; i-- ){
          genericValue += source.indexOf(inputArr[i]) * (multiplier);
          multiplier = multiplier * source.length;
      }
  console.log(genericValue);
  
  // New way
  
  if (genericValue < target.length - 1) {
      return target[genericValue];
  }
  
// determine target system
const resultMap =[];
const divider = target.length;

while (genericValue / divider > 0){
    const reminder = genericValue % divider;
    const quotient = (genericValue - reminder) / divider;

    resultMap.unshift(reminder);
    genericValue = quotient;
}
console.log(resultMap);

return resultMap.map(e => target[e]).join('');

// My old manual way
  
//   // Create map of indexes coresponding to target scheme
//   // like filling empty glasses.     
    
//       const result = [0]; // strat with one empty glass
//       const maxFiller =  target.length; //Max portion of filling
//       const targetMaxIdx = maxFiller - 1; //Max content of glass
     
  
//       while (genericValue > 0 ){
            
//   //      Starting filling process
//           let filler = genericValue > maxFiller ? maxFiller : genericValue;
//           const initFiller = filler;
//           let j = result.length - 1; 
          
//               //looking for some empty space
//               while (filler  > 0){
//                   const placeholderSpace = targetMaxIdx - result[j];
//                   if (placeholderSpace > 0){     // Space found 
//                       result[j]++;               
//                       filler --;
//                   }else{                         // Space not fount
//                       if (j < 0 ){               // if already first glass, 
//                           result.unshift(1);     // add one more glass and poure one unit in it
//                           filler--;
//                           j = result.length - 1; // Restart space search from  start;
  
//                       }else{
//                           result[j] = 0;          // if not the first glass, reset amount to 0 and move to next glass
//                           j--;
//                       }
//                   }
//               }
//         // reduce remaining amount by initial filler
//           genericValue -= initFiller;
//         //   console.log(result);
//       }
  
//       // Create result from map
//       return result.map(e => target[e]).join('');
  };


  var Alphabet = {
    BINARY:        '01',
    OCTAL:         '01234567',
    DECIMAL:       '0123456789',
    HEXA_DECIMAL:  '0123456789abcdef',
    ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};


// 1001001100101100000001011010010 01 01234567

// 0   0
// 1   1
// 2   10
// 3   11
// 4   100
// 5   101
// 6   110
// 7   111
// 8   1000
// 9   1001
//10   1010
//11   1011
//12   1100
//13   1101
//14   1110
//15   1111






// console.log(convert("33", Alphabet.DECIMAL, Alphabet.BINARY), '100001');
// console.log(convert("15", Alphabet.DECIMAL, Alphabet.BINARY), '1111', '"15" dec -> bin');
// console.log(convert("15", Alphabet.DECIMAL, Alphabet.OCTAL), '17', '"15" dec -> oct');
// console.log(convert("1001001100101100000001011010010", Alphabet.BINARY, Alphabet.OCTAL), '17', '"15" dec -> oct');
// console.log(convert("1010", Alphabet.BINARY, Alphabet.DECIMAL), '10', '"1010" bin -> dec');
// console.log(convert("1010", bin, hex), 'a', '"1010" bin -> hex');
console.log(convert("0", Alphabet.DECIMAL, Alphabet.ALPHA), 'a', '"0" dec -> alpha');