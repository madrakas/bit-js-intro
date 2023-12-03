console.clear();

String.prototype.camelCase=function(){
   return this.split(' ').map((word) => (word.split('')
                           .map((letter, idx) => (idx ? letter.toLowerCase() : letter.toUpperCase())))
                           .join('')).join('');
  }

// console.log(camelCase('test case'));

  console.log("test case".camelCase(), "TestCase");
//   console.log("camel Case method".camelCase(), "CamelCaseMethod");
//   console.log("say hello".camelCase(), "SayHello");
//   console.log("camel case word".camelCase(), "CamelCaseWord");
//   console.log("".camelCase(), "");