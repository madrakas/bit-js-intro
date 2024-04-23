// https://www.codewars.com/kata/54bb6f887e5a80180900046b/train/javascript

console.clear();

function longestPalindrome(s){
    let pLength = 0;

    for (let i = 0; i < s.length; i++) {
        let subString = '';
        for (let j = i; j < s.length; j++) {
            subString += s[j];
            if (subString === subString.split('').reverse().join('')  && subString.length > pLength){
                pLength = subString.length;
            }
        }
    }
    return pLength;
}

// console.log(longestPalindrome("a"), 1);
console.log(longestPalindrome("aa"), 2);
// console.log(longestPalindrome("baa"), 2);
// console.log(longestPalindrome("aab"), 2);
// console.log(longestPalindrome("zyabyz"), 1);
// console.log(longestPalindrome("BaaBcd"), 4);
// console.log(longestPalindrome("baablkj12345432133d"), 9);
// console.log(longestPalindrome(""), 0);
// console.log(longestPalindrome("Aa"), 1);

console.log(longestPalindrome('ZkrhcigUR6hGNj79masjY29gIHXkZLN8'), 1);