// k8 dublikatų paieška ir užkodavimas

console.clear();

function duplicateEncode(text){
    if (text.length === 0){
        return '';
    }
    // gaminam lowercase ir array
    textLowercase = text.toLowerCase();
    textArr = textLowercase.split('');
    
    // randam unikalius array narius
    unique = '';
    let singleChar = '';
    let multipleChar = '';

    for (i = 0; i < textArr.length; i++){
        //console.log(textArr[i]);
        if (!unique.includes(textArr[i])){
            unique += textArr[i];
        }
    } 

    //jei unikalių simbolių ilgis toks pats kaip pradinis textas, visi simboliai yra panaudoti tik kartą
    if (textLowercase.length === unique.length){
        return '('.repeat(textLowercase.length);
    }
    
    // eianam per unique  ir pasiimam po vieną unikalią raidę
    for (let i1 = 0; i1 < unique.length; i1++ ){
        let tempUniqueSum =0;
        // su raide einam per lowertext ir skaičiuojam atitikimusm 
        for (let i2 = 0; (i2 < textLowercase.length) && (tempUniqueSum <2); i2++){
            if (unique[i1] === textArr[i2]){
                tempUniqueSum++;
                if (tempUniqueSum >1){  // jei daugiau nei 1 atitikimas, 
                    multipleChar += unique[i1];
                    
                }
            }
        }
        if (tempUniqueSum < 2){
            singleChar += unique[i1];
        }
    }
    
    let result = '';
    // Kuriam naują stringą
    for (i = 0; i < textLowercase.length; i++){
        if (multipleChar.includes(textLowercase[i])){
            result += ")";
        }else{
            result += "(";
        }

    }

    return result;


  }

  console.log(duplicateEncode("aai"),"))(");
  console.log(duplicateEncode("din"),"(((");
  console.log(duplicateEncode("recede"),"()()()");
  console.log(duplicateEncode("Success"),")())())","should ignore case");
  console.log(duplicateEncode("(( @"),"))((");