console.clear();

function inArray(array1,array2){
    result = [];
    for (const word1 of array1){

        for (const word2 of array2){
            // console.log(word1, word2);
            if (word2.includes(word1)){
                result.push(word1);
                break;
            }
        }
    }
    return result.sort();
}

    
    const  a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
  
    let a1 = ["xyz", "live", "strong"]
    console.log((inArray(a1, a2)), ["live", "strong"]);
  
    a1 = ["live", "strong", "arp"]
    console.log((inArray(a1, a2), ["arp", "live", "strong"]));
  
    a1 = ["tarp", "mice", "bull"]
    console.log((inArray(a1, a2), []));
    

