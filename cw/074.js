console.clear();

function isValidIP(str) {
    whitelist='1234567890.';
   
       
    if (str !==''){
        if (str.split('').filter(n => (!whitelist.includes(n))).length < 1){
            if (str.split('.').length === 4){
                if  (str.split('.').map(part => (part.length === (parseInt(part).toString().length) ? '' : 1 )).join('').length === 0){
                    if(((str.split('.').map(part => (((parseInt(part) < 0) || (parseInt(part) > 255)) ? part : '')).join('').length === 0))){
                        return true;                
                    }        
                }
            }
        }    
    }
    return false;
  }


  
//   console.log(isValidIP("0.0.0.0"        ),  true);
  console.log(isValidIP("12.255.56.1"    ),  true);
//   console.log(isValidIP("137.255.156.100"),  true);
//   console.log(isValidIP(''               ), false);
//   console.log(isValidIP('abc.def.ghi.jkl'), false);
//   console.log(isValidIP('123.456.789.0'  ), false);
//   console.log(isValidIP('12.34.56'       ), false);

//   console.log(isValidIP('01.02.03.04'    ), false);

//   console.log(isValidIP('256.1.2.3'      ), false);
//   console.log(isValidIP('1.2.3.4.5'      ), false);
//   console.log(isValidIP('123,45,67,89'   ), false);
//   console.log(isValidIP('1e0.1e1.1e2.2e2'), false);
//   console.log(isValidIP(' 1.2.3.4'       ), false);
//   console.log(isValidIP('1.2.3.4 '       ), false);
//   console.log(isValidIP('12.34.56.-7'    ), false);
//   console.log(isValidIP('1.2.3.4\n'      ), false);
//   console.log(isValidIP('\n1.2.3.4'      ), false);