// k6 dublikatų paieška

console.clear();

function duplicateCount(text){
    if (text.length === 0){
        return 0;
    }
    // gaminam lowercase ir array
    textLowercase = text.toLowerCase();
    textArr = textLowercase.split('');
    
    // randam unikalius array narius
    unique = '';

    for (i = 0; i < textArr.length; i++){
        //console.log(textArr[i]);
        if (!unique.includes(textArr[i])){
            unique += textArr[i];
        }
    }

    if (textLowercase.length === unique.length){
        return 0;
    }
    
    // eianam per unique  ir pasiimam po vieną unikalią raidę
    uniqueSum = 0;
    for (let i1 = 0; i1 < unique.length; i1++ ){
        let tempUniqueSum =0;
        for (let i2 = 0; (i2 < textLowercase.length) && (tempUniqueSum <2); i2++){
            
            if (unique[i1] === textArr[i2]){
                tempUniqueSum++;
                if (tempUniqueSum >1){
                    uniqueSum++;
                }
            }
        }
    }
    
    return uniqueSum;
  }

  console.log(duplicateCount(""), 0);
  console.log(duplicateCount("abcde"), 0);
  console.log(duplicateCount("aabbcde"), 2);
  console.log(duplicateCount("aabBcde"), 2,"should ignore case");
  console.log(duplicateCount("Indivisibility"), 1)
  console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
  console.log(duplicateCount("aabbccddee"), 2);