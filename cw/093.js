console.clear();

function validPhoneNumber(phoneNumber){
    if (phoneNumber.length !== 14){
        return false;
    }

    if (phoneNumber[0] !== '(' || phoneNumber[4] !==')' || phoneNumber[5] !== ' ' || phoneNumber[9] !== '-'){
        return false;
    }
    
    const numbers='1234567890';

    if (phoneNumber.split('').filter(a => (numbers.includes(a))).length !==10){
        return false;
    }

    return true;
}

console.log(validPhoneNumber("(123) 456-7890"));

