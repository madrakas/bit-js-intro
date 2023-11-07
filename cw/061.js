console.clear();

function longestConsec(strarr, k) {
    if (k < 1 || k > strarr.length){
        return "";
    }

    const consecs = [];
    for (let i1 = 0; i1 < strarr.length - (k -1); i1++) {
        let word = strarr[i1];
        
        for (let i = 1; i < k; i++) {
            word += strarr[i1 + i]
        }
        consecs.push(word);
    }
    return consecs.sort((a1, a2) => a2.length - a1.length)[0];
    
}



// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta");

// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh");
// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu");
// console.log(longestConsec(["c","aaa", "bb",], 2), "aaabb");



 console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz");
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "");
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "");
// console.log(longestConsec([], 3), "");
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "");
 

