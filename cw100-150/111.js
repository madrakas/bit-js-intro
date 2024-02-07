console.clear();

function tripledouble(num1, num2) {
    triplesList = ['111', '222', '333', '444', '555', '666', '777', '888', '999', '000'];
    doublesList = ['11', '22', '33', '44', '55', '66', '77', '88', '99', '00'];

    const str1 = '' + num1;
    const str2 = '' + num2;
    for (let i = 0; i < 10; i++) {
        if (str1.includes(triplesList[i])){
            if (str2.includes(doublesList[i])){
                return 1;
            }
        }
    }
    return 0;
  }

//   console.log(tripledouble(451999277,41177722899),1);
//   console.log(tripledouble(1222345, 12345),0);
//   console.log(tripledouble(12345, 12345),0);
//   console.log(tripledouble(666789, 12345667),1);
//   console.log(tripledouble(10560002, 100),1);
//   console.log(tripledouble(1112, 122),0);