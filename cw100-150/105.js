console.clear();

function rot13(message){
    const src = ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const dst = ('nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM');
    
    return message.split('').map(l => src.includes(l) ? dst[(src.indexOf(l))] : l ).join('');
}


console.log(rot13("test"), "grfg");
console.log(rot13("Test"), "Grfg");

