
// Neutralisation

console.clear();

console.log('AAAA');
function neutralise(s1, s2) {
    // Here be dragons!
    // for (let i = 0; i < amount; i++){
        
    let neutralised = '';

    for (let i = 0;  i < s1.length; i++){
        let n1 = 0;
        let n2 = 0;
        let n = 0;
        

        if (s1[i] === '+'){
            n1 = 1;
        } else{
            n1 = -1;
        }
        
        if (s2[i] === '+'){
            n2 = 1;
        } else{
            n2 = -1;
        }
        
        n = n1 + n2;
        if (n > 0){
            n = '+';
        } else if (n < 0){
            n = '-';
        }
        neutralised += n;
    }

    return neutralised;
  }


    console.log(neutralise("--++--", "++--++") === "000000");
    console.log("-+-+-+", "-+-+-+", neutralise("-+-+-+", "-+-+-+"), neutralise("-+-+-+", "-+-+-+") === "-+-+-+");
    console.log(neutralise("-++-", "-+-+") === "-+00");
    console.log(neutralise("--++", "++++") === "00++");
    console.log(neutralise("+++--+---", "++----++-") === "++0--000-");
    console.log(neutralise("-----", "-----") === "-----");
    console.log(neutralise("-+", "++") === "0+");
    console.log(neutralise("--", "-+") === "-0");
    console.log(neutralise("-++", "+--") === "000");
    console.log(neutralise("++-++--++-", "-+++-++-++") === "0+0+0000+0");
    console.log(neutralise("-++-+-++-", "+-++++---") === "00+0+000-");
    console.log(neutralise("---++-+--", "-+++--++-") === "-00+0-+0-");
    console.log(neutralise("+-----+++-", "--+-+-++--")=== "0-0-0-++0-");
    console.log(neutralise("+-----+-", "---++-++") === "0--00-+0");
    console.log(neutralise("-+--+-+---", "-+--+-+-+-") === "-+--+-+-0-");
    console.log(neutralise("+-+", "-++") === "00+");
    console.log(neutralise("-++", "-+-") === "-+0");
    console.log(neutralise("---+", "-+++") === "-00+");
    console.log(neutralise("+--", "+--") === "+--");
    console.log(neutralise("--+++-+-", "+++++---") === "00+++-0-"); 