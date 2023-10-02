console.clear();
function disemvowel(str){
    str=str.replaceAll('a','');
    str=str.replaceAll('e','');
    str=str.replaceAll('i','');
    str=str.replaceAll('o','');
    str=str.replaceAll('u','');
    str=str.replaceAll('A','');
    str=str.replaceAll('E','');
    str=str.replaceAll('I','');
    str=str.replaceAll('O','');
    str=str.replaceAll('U','');
    return str;
}

console.log(disemvowel("This website is for losers LOL!a"), "Ths wbst s fr lsrs LL!")
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
console.log(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")