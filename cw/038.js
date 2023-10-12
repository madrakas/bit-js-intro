//k8
console.clear();

function strCount(str, letter){
    let count = 0;  
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter){
            count++;
        }
    }
    return count;
  }



console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('',      'z'), 0);