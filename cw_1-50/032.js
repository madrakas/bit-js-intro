//k6

/* * 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */
console.clear();

function solution(str){
    
    const result =[];
    for (let i = 0; i  < str.length; i += 2 ){
        if (i + 1 < str.length){
            result.push (str.substring(i, i + 2));
        }else{
            result.push (str[i]);
            result[result.length - 1] += '_';
        }
    }
    return result;
}

console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);