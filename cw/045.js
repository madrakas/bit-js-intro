// complete the function
function solution(string) {
    let result = '';
    const capLList = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
    for (let i = 0; i < string.length; i++) {
        if (capLList.includes(string[i])){
            result += ' ' ;
        }
        result += string[i];
    }
    return result;
}

