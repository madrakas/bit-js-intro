//k6 

console.clear();

function comp(array1, array2){
    if ((Array.isArray(array1) != true) || (Array.isArray(array2) != true) || (array1.length !== array2.length)){
        return false;
    }

    if (array1.length === 0 && array2.length === 0){
        return true;
    }

    

    const arr1Sq =[]
    for (let i = 0; i < array1.length; i++) {
        arr1Sq.push(array1[i] ** 2) ;
    }



    for (let i = 0; i < array2.length; i++) {
        if (arr1Sq.includes(array2[i]) != true) {
            return false;
        }else{
            const index = arr1Sq.indexOf(array2[i]);
            arr1Sq.splice(index, 1);
        }
        
    }
    return true;
  }

  let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
  let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];



  console.log(comp(a1, a2));

  