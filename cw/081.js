
console.clear();

function encrypt(text, n) {

    if (text === null || text.length===''){
        return '';
    }

    let result = text;
    for (let i = 0; i < n; i++) {
        let tmpStrOdd = '';
        let tmpStrEven = '';
        result.split('').forEach((element, idx) => {
            idx % 2 === 0 ? tmpStrEven += element : tmpStrOdd += element;
        });
        result = tmpStrOdd + tmpStrEven;
    }
    return result;
}

function decrypt(encryptedText, n) {
    if (encryptedText === null || encryptedText.length===''){
        return '';
    }

    const middle = (encryptedText.length / 2);
    let result = encryptedText;
    
    for (let i0 = 0; i0 < n; i0++) {
        let tmpStr ='';
        const tmpStrOdd = result.slice(middle);
        const tmpStrEven = result.slice(0, middle);   
        // console.log(tmpStrOdd);
        // console.log(tmpStrEven);
        for (let i = 0; i < middle; i++) {
            let a = '';
            let b = '';

            if (i < tmpStrOdd.length){
                a = tmpStrOdd[i];
            }

            if (i < tmpStrEven.length){
                b = tmpStrEven[i];
            }
            
            tmpStr += a + b;
        }
        result = tmpStr;
    }
    return result;
}

// console.log(decrypt("This is a test!", 0), "This is a test!");
console.log(decrypt("hsi  etTi sats!", 1), "This is a test!");
console.log(decrypt("s eT ashi tist!", 2), "This is a test!");
// console.log(decrypt(" Tah itse sits!", 3), "This is a test!");
// console.log(decrypt("This is a test!", 4), "This is a test!");
// console.log(decrypt("This is a test!", -1), "This is a test!");
// console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");