console.clear();

function validBraces(string){
    const braceYourself= [];
    let result = true;

    string.split('')
          .map((symbol) => ("([{".includes(symbol) 
            ? braceYourself.push(symbol)
            : symbol===")]}"["([{".indexOf(braceYourself[braceYourself.length - 1])] //symbol is last's unclosed brace's closing brace
            ? braceYourself.pop() : result = false
    ));
    
    
    return result && braceYourself.length === 0;                                                        
}




     console.log(validBraces("()))"), false);
    // console.log(validBraces("()"), true);
    //  console.log(validBraces("[]"), true);
    // console.log(validBraces("{}"), true);
    //  console.log(validBraces("(){}[]"), true);
    // console.log(validBraces("([{}])"), true);
    // console.log(validBraces("(}"), false);
    //  console.log(validBraces("[(])"), false);
    // console.log(validBraces("({})[({})]"), true);
    // console.log(validBraces("(})"), false);
    // console.log(validBraces("(({{[[]]}}))"), true);
    // console.log(validBraces("{}({})[]"), true);
    // console.log(validBraces(")(}{]["), false);
    // console.log(validBraces("())({}}{()][]["), false);
    // console.log(validBraces("(((({{"), false);
    // console.log(validBraces("}}]]))}])"), false);
  