// k6

console.clear();

function listNumbers(num){
    num--;
    i5 = (num - num % 5) / 5;
    i3 = (num - num % 3) / 3;
    s5 = 0;
    s3 = 0;
    
    for (let i = 1; i <= i5; i++) {
        
        
        if ((5*i) % 3 != 0 ){
            s5 += 5*i;
             console.log('5*' + i, 5*i);    
        }
    }

    for (let i = 1; i <= i3; i++) {
        s3 += 3*i;
         console.log('3*' + i, 3*i);
    }

    const s = s5 +s3;
    if (s < 0) {
        return 0;
    } else {
        return s;
    }
}

console.log(listNumbers(20));

