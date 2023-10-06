//6 
//153 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

console.clear();

function narcissistic(v) {
    const vStr ='' + v;
    const vLen = vStr.length;
    let t = (+vStr[0]) ** vLen;
 
    for(i = 1; i < vLen; i++){
        t += (+vStr[i])**vLen; 
       // console.log(`${vStr[i]} ** ${vLen} = ${t}`);
    } 
    
    return t===v;
}   
 
// console.log(narcissistic(7), true);
// console.log(narcissistic(153), true);
// console.log(narcissistic(122), false);
// console.log(narcissistic(487), false);
console.log(narcissistic(40028394225), true);
