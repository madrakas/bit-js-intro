console.clear();
function stockList(listOfArt, listOfCat){
    result = [];
    let badCount = true;
    let newListOfArt = listOfArt.map(art => (art.split(' ')));
    

    listOfCat.forEach(category => {
        let count  = 0;
        const tmpListOfArt = newListOfArt.filter(art => (art[0][0] === category));
        tmpListOfArt.forEach(art => (count += parseInt(art[1])));
        // console.log(tmpListOfArt);
        if (count) {
            badCount =false;
        }
        result.push(`(${category} : ${count})`);
    });    
    if (badCount === true){
        return '';
    } else{
        return result.join(' - ');    
    }
}

console.log();


const b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
 const c = ["A", "B", "C", "D"];
// res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
// assert.strictEqual(stockList(b, c), res)
// 
// b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
// c = ["A", "B"]
// res = "(A : 200) - (B : 1140)"

console.log(stockList(b, c));