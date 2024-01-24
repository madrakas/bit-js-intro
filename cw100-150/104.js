console.clear();

function generateHashtag(input){
    if (input.length === 0) {
        return false;
    }

    const whitelist = 'abcdefghijklmnopqrstuvwxyz ';

    let result =  input.toLowerCase()
        .split('')
        .filter(a => whitelist.includes(a))
        .join('')
        .split(' ');
    
    if (result.length === 0 || result > 139) {
        return false;
    }

    result = result.map(word => {
        let wordArr = word.split('').map((letter, idx) =>{
            return idx === 0 ? letter.toUpperCase() : letter;
        })
        return wordArr.join('');
    }).join('');
       
    return result.length >139 ? false : '#' + result;
    
}

// console.log(generateHashtag(""), false, "Expected an empty string to return false")
console.log(generateHashtag(" ".repeat(200)), false, "Still an empty string")
// console.log(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
// console.log(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
// console.log(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
// console.log(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
// console.log(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
// console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
// console.log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
// console.log(generateHashtag("a".repeat(140)), false, "Too long")