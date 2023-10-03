/* if - palyginimas

Palyginimo operatoriai:
- visi: 
- naudotini: 
- nenaudotini: >, <, ==

kodo sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} ... else if () {} ... else {}
*/

if (4 > 2) {
 console.log('4 yra daugiau už 2');
}

if (5 < 0) {
    console.log('5 yra daugiau už 0');  // neišves nes if sąlyga netenkinama
}

if (true) {
    console.log(true);
}

if (false) {
    console.log(false); // neišves, nes sąlyga netenkinama
}

const a = 7;
const b = 7;

if (a > b) {
    console.log('A yra daugiau uz B');
} else {
    console.log('A nera daugiau uz B (arba A = B)');

}



const day = 0;
//  1    2  3  4  5  6  7
//  7+1  9 10 11 12 13 14
// 14+1 16 17 18 19 20 21
// 21+1 23 24 25 26 27 28
// 28+1 30 31

if (day % 7 == 1) {
    console.log('Pirmadienis');
} else if (day % 7 == 2) {
    console.log('Antradienis');
} else if (day % 7 == 3) {
    console.log('Trečiadienis');
} else if (day % 7 == 4) {
    console.log('Ketvirtadienis');
} else if (day % 7 == 5) {
    console.log('Penktadienis');
} else if (day % 7 == 6) {
    console.log('Šeštadienis');
} else if (day % 7 == 0) {
    console.log('Sekmadienis');
} else {
    console.log('Tokia diena neegzistuoja');
}

console.clear();

// Kodo nestinimas

const diena = 20;

if (diena === 1) {
    console.log('Pirmadienis');
} else {
    if (diena === 2) {
        console.log('Antradienis')
    } else {
        if (diena === 3) {
            console.log('Trečiadienis')
        } else {
            if (diena === 4) {
                console.log('Ketvirtadienis')
            } else {
                if (diena === 5) {
                    console.log('penktadienis')
                } else {
                    if (diena === 6) {
                        console.log('šeštadienis')
                    } else {
                        if (diena === 7) {
                            console.log('sekmadienis')
                        } else {
                                console.log('Tokios dienos nėra')
                        } 
                         
                    } 
                } 
            } 
        } 
    } 
}


console.clear();

/* Gali būti
- diena/naktis
- lyja/nelyja
*/


// reikia užbaigti
const parosMetas0 = 'naktis';
const arLyja0 = false;
const temp0 = -50;
const kadaSilta0 = 20;
const arAsSuStriuke0 = false;
const savaitesDiena0 = 1;

kaVeikti(parosMetas0, arLyja0, temp0, kadaSilta0, arAsSuStriuke0, savaitesDiena0);
kaVeikti2(parosMetas0, arLyja0, temp0, kadaSilta0, arAsSuStriuke0, savaitesDiena0);

function kaVeiktiErrorCheck(parosMetas, arLyja, temp, kadaSilta, arAsSuStriuke, savaitesDiena){
    let err = false;
    let errStr = '';
    
    console.log('Start error handler');
    //console.log(arLyja);
    if (parosMetas !== 'naktis' && parosMetas !== 'diena'){
        err = true;
        errStr += 'parosMetas turi būti "diena" arba "naktis". ';
    }
    
    if (arLyja !== true && arLyja !== false){
        err = true;
        errStr += 'arLyja turi būti "true" arba "false". ';
    }

    if (temp < -273.15 && typeof temp === 'number'){
        err = true;
        errStr += 'temp turi būti skaičius didesnis už absoliutų nulį. ';
    }

    if (kadaSilta < -273.15 && typeof kadaSilta !== 'number'){
        err = true;
        errStr += 'kadaSilta turi būti skaičius didesnis už absoliutų nulį. ';
    }

    if (arAsSuStriuke !== true && arAsSuStriuke !== false){
        err = true;
        errStr += 'arAsSuStriuke turi būti "true" arba "false". ';
    }

    if (typeof savaitesDiena !== 'number' && (savaitesDiena >= 1 && savaitesDiena <8 )){
        err = true;
        errStr += 'savaitesDiena turi būti skaičius tarp 1 ir 7". ';
    }
    const errArr1 = [err, errStr];
    console.log('End error handler');
    return errArr1;
}

function kaVeikti (parosMetas, arLyja, temp, kadaSilta, arAsSuStriuke, savaitesDiena){
    const errArr2 = kaVeiktiErrorCheck(parosMetas, arLyja, temp, kadaSilta, arAsSuStriuke, savaitesDiena);
    if (errArr2[0]=== true){
        console.log(errArr2[1]);
    }else{
        if (parosMetas === 'diena' && !arLyja && temp >= kadaSilta && arAsSuStriuke && (savaitesDiena >= 6 && savaitesDiena < 8)){
            console.log('Nusivilkt striukę ir varyt prie ežero');
        } else if (parosMetas === 'naktis' && !arLyja && temp >= kadaSilta && arAsSuStriuke && (savaitesDiena >= 6 && savaitesDiena < 8)){
            //	naktis, giedra, karšta, su, savaitgalis
            console.log('Į gamtą. Striukė bus vietoje palapinės');
        } else if (parosMetas === 'diena' && arLyja && temp >= kadaSilta && arAsSuStriuke && (savaitesDiena >= 6 && savaitesDiena < 8)){
            //	diena, lyja, karšta, su, savaitgalis
            console.log('Į žvejybą');
        } else if (parosMetas === 'diena' && !arLyja && temp < kadaSilta && arAsSuStriuke && (savaitesDiena >= 6 && savaitesDiena < 8)){
            //	diena, giedra, šalta, su, savaitgalis
            console.log('Grybauti pats tas');
        } else if (parosMetas === 'diena' && !arLyja && temp >= kadaSilta && !arAsSuStriuke && (savaitesDiena >= 6 && savaitesDiena < 8)){
            //	diena, giedra, karšta, be, savaitgalis
            console.log('Tik prie jūros!');
        } else if (parosMetas === 'diena' && !arLyja && temp >= kadaSilta && arAsSuStriuke && (savaitesDiena >= 1 && savaitesDiena < 6)){
            //	diena, giedra, karšta, su, darbadienis
            console.log('Į darbą su mašina ir su kondiške iki galo');
        } else if (parosMetas === 'naktis' && arLyja && temp >= kadaSilta && arAsSuStriuke && (savaitesDiena >= 6 && savaitesDiena < 8)){
            //	naktis, lyja, karšta, su, savaitgalis
            console.log('Nė pirties nereikia');
        } else if (parosMetas === 'naktis' && !arLyja && temp < kadaSilta && arAsSuStriuke && (savaitesDiena >= 6 && savaitesDiena < 8)){
            //	naktis, giedra, šalta, su, savaitgalis
            console.log('Gerai matysis žvaigždės ir neušalsiu');
        } else if (parosMetas === 'naktis' && !arLyja && temp >= kadaSilta && !arAsSuStriuke && (savaitesDiena >= 6 && savaitesDiena < 8)){
            //	naktis, giedra, karšta, be, savaitgalis
            console.log('Pati nuostabiausia naktis');
        } else if (parosMetas === 'naktis' && !arLyja && temp >= kadaSilta && arAsSuStriuke && (savaitesDiena >= 1 && savaitesDiena < 6)){
            //	naktis, giedra, karšta, su, darbadienis
            console.log('Šokiai su striukėmis');
        } else if (parosMetas === 'diena' && arLyja && temp < kadaSilta && arAsSuStriuke && (savaitesDiena >= 6 && savaitesDiena < 8)){
            //	diena, lyja, šalta, su, savaitgalis
            console.log('Turbūt bulviakasis');
        } else if (parosMetas === 'diena' && arLyja && temp >= kadaSilta && !arAsSuStriuke && (savaitesDiena >= 6 && savaitesDiena < 8)){
            //	diena, lyja, karšta, be, savaitgalis
            console.log('Šokis lietuje');
        } else if (parosMetas === 'diena' && arLyja && temp >= kadaSilta && arAsSuStriuke && (savaitesDiena >= 1 && savaitesDiena < 6)){
            //	diena, lyja, karšta, su, darbadienis
            console.log('Į darbą su autobusu');
        } else if (parosMetas === 'diena' && !arLyja && temp < kadaSilta && !arAsSuStriuke && (savaitesDiena >= 6 && savaitesDiena < 8)){
            //	diena, giedra, šalta, be, savaitgalis
            console.log('Su mašina į kiną');
        } else if (parosMetas === 'diena' && !arLyja && temp < kadaSilta && arAsSuStriuke && (savaitesDiena >= 1 && savaitesDiena < 6)){
            //	diena, giedra, šalta, su, darbadienis
            console.log('į darbą su dviračiu ');
        } else if (parosMetas === 'diena' && !arLyja && temp >= kadaSilta && !arAsSuStriuke && (savaitesDiena >= 1 && savaitesDiena < 6)){
            //	diena, giedra, karšta, be, darbadienis
            console.log('Ech kodėl ne savaitgalis');
        } else if (parosMetas === 'diena' && !arLyja && temp < kadaSilta && !arAsSuStriuke && (savaitesDiena >= 1 && savaitesDiena < 6)){
            //	diena, giedra, šalta, be, darbadienis
            console.log('Su mašina į darbą ir atsisukt šilumos');
        } else if (parosMetas === 'diena' && arLyja && temp >= kadaSilta && !arAsSuStriuke && (savaitesDiena >= 1 && savaitesDiena < 6)){
            //	diena, lyja, karšta, be, darbadienis
            console.log('Su mašina į darbą');
        } else if (parosMetas === 'diena' && arLyja && temp < kadaSilta && arAsSuStriuke && (savaitesDiena >= 1 && savaitesDiena < 6)){
            //	diena, lyja, šalta, su, darbadienis
            console.log('Į darbą su paspirtuku');
        } else if (parosMetas === 'diena' && arLyja && temp < kadaSilta && !arAsSuStriuke && (savaitesDiena >= 6 && savaitesDiena < 8)){
            //	diena, lyja, šalta, be, savaitgalis
            console.log('Prie TV');
        } else if (parosMetas === 'naktis' && !arLyja && temp >= kadaSilta && !arAsSuStriuke && (savaitesDiena >= 1 && savaitesDiena < 6)){
            //	naktis, giedra, karšta, be, darbadienis
            console.log('Pati linksmiausia darbadienio naktis');
        } else if (parosMetas === 'naktis' && !arLyja && temp < kadaSilta && arAsSuStriuke && (savaitesDiena >= 1 && savaitesDiena < 6)){
            //	naktis, giedra, šalta, su, darbadienis
            console.log('Galima prasieiti lauke prieš miegą');
        } else if (parosMetas === 'naktis' && !arLyja && temp < kadaSilta && !arAsSuStriuke && (savaitesDiena >= 6 && savaitesDiena < 8)){
            //	naktis, giedra, šalta, be, savaitgalis
            console.log('Shopping');
        } else if (parosMetas === 'naktis' && arLyja && temp >= kadaSilta && arAsSuStriuke && (savaitesDiena >= 1 && savaitesDiena < 6)){
            //	naktis, lyja, karšta, su, darbadienis
            console.log('Bus dušna miegot');
        } else if (parosMetas === 'naktis' && arLyja && temp >= kadaSilta && !arAsSuStriuke && (savaitesDiena >= 6 && savaitesDiena < 8)){
            //	naktis, lyja, karšta, be, savaitgalis
            console.log('Imam taksą ir į miestą');
        } else if (parosMetas === 'naktis' && arLyja && temp < kadaSilta && arAsSuStriuke && (savaitesDiena >= 6 && savaitesDiena < 8)){
            //	naktis, lyja, šalta, su, savaitgalis
            console.log('Į bariuką?');
        } else if (parosMetas === 'diena' && arLyja && temp < kadaSilta && !arAsSuStriuke && (savaitesDiena >= 1 && savaitesDiena < 6)){
            //	diena, lyja, šalta, be, darbadienis
            console.log('Pati liūdniausia diena');
        } else if (parosMetas === 'naktis' && !arLyja && temp < kadaSilta && !arAsSuStriuke && (savaitesDiena >= 1 && savaitesDiena < 6)){
            //	naktis, giedra, šalta, be, darbadienis
            console.log('Namie su knyga');
        } else if (parosMetas === 'naktis' && arLyja && temp >= kadaSilta && !arAsSuStriuke && (savaitesDiena >= 1 && savaitesDiena < 6)){
            //	naktis, lyja, karšta, be, darbadienis
            console.log('Prie PC');
        } else if (parosMetas === 'naktis' && arLyja && temp < kadaSilta && arAsSuStriuke && (savaitesDiena >= 1 && savaitesDiena < 6)){
            //	naktis, lyja, šalta, su, darbadienis
            console.log('Šuo nori į lauką');
        }  else if (parosMetas === 'naktis' && arLyja && temp < kadaSilta && !arAsSuStriuke && (savaitesDiena >= 6 && savaitesDiena < 8)){
            //	naktis, lyja, šalta, be, savaitgalis
            console.log('Pati liūdniausia savaitgalio naktis');
        } else if (parosMetas === 'naktis' && arLyja && temp < kadaSilta && !arAsSuStriuke && (savaitesDiena >= 1 && savaitesDiena < 6)){
            //	naktis, lyja, šalta, be, darbadienis
            console.log('pati liūdniausia naktis');
        }else{
            console.log("klaida....");
        }
    }
      
    console.log('Monster end');

}   


/* if (parosMetas === 'diena' && arLyja === true && temp >= kadaSilta && ){
    console.log('Sokis lietuje')
if (parosMetas === 'diena' && arLyja === true && temp >= kadaSilta){
    console.log('Sokis lietuje')
} else if (parosMetas === 'diena' && arLyja === true && temp >= kadaSilta){
        console.log('Šaltas lietus. Sėdim namie.')
} else if (parosMetas === 'diena' && arLyja === false){
    console.log('Sokis lietuje')
} else if (parosMetas === 'diena' && arLyja === false) {
    console.log('Eiline diena rojuje')
} else if (parosMetas ==='naktis' && arLyja === true){
    console.log('Sedim namie');
} else if(parosMetas === 'naktis' && arLyja === false){
    console.log('Einam žiūrėti žvaigždžių');
} */



// !arAsSuStriuke && 
function kaVeikti2 (parosMetas, arLyja, temp, kadaSilta, arAsSuStriuke, savaitesDiena){
    const errArr2 = kaVeiktiErrorCheck(parosMetas, arLyja, temp, kadaSilta, arAsSuStriuke, savaitesDiena);
    if (errArr2[0]=== true){
        console.log(errArr2[1]);
    }else{

        console.log('monster2Start');
        if (parosMetas0 === 'diena') {
            //Diena
            if (arLyja){
              //lyja
                if (temp >= kadaSilta){
                    //šilta
                    if (arAsSuStriuke){
                        //Striukė
                        if (savaitesDiena >= 6 && savaitesDiena < 8){
                            //Savaitgalis
                            console.log("Į žvejybą");
                            }else{
                            //darbo diena
                            console.log("Į darbą su autobusu");
                            }
                    }else{
                        //Be striukės
                        if (savaitesDiena >= 6 && savaitesDiena < 8){
                            //Savaitgalis
                            console.log("Šokis lietuje");
                        }else{
                            //darbo diena
                            console.log("Su mašina į darbą");
                        }
                    }
                }else{
                    //šalta
                    if (arAsSuStriuke){
                        //Striukė
                        if ((savaitesDiena >= 6) && (savaitesDiena < 8)) {
                            //Savaitgalis
                            console.log("Turbūt bulviakasis");
                        }else{
                            //darbo diena
                            console.log("Į darbą su paspirtuku");
                        }
                    }else{
                        //Be striukės
                        if (savaitesDiena >= 6 && savaitesDiena < 8){
                            //Savaitgalis
                            console.log("Prie TV");
                        }else{
                            //darbo diena
                            console.log("Pati liūdniausia diena");
                        }
                    }
                }
            }else{
                  //lyja
                  if (temp >= kadaSilta){
                    //šilta
                    if (arAsSuStriuke){
                        //Striukė
                        if (savaitesDiena >= 6 && savaitesDiena < 8){
                            //Savaitgalis
                            console.log("Nusivilkt striukę ir varyt prie ežero");
                        }else{
                            //darbo diena
                            console.log("Į darbą su mašina ir su kondiške iki galo");
                        }
                    }else{
                        //Be striukės
                        if (savaitesDiena >= 6 && savaitesDiena < 8){
                            //Savaitgalis
                            console.log("Tik prie jūros!");
                        }else{
                            //darbo diena
                            console.log("Ech kodėl ne savaitgalis");
                        }
                    }
                }else{
                    //šalta
                    if (arAsSuStriuke){
                        //Striukė
                        if (savaitesDiena >= 6 && savaitesDiena < 8){
                            //Savaitgalis
                            console.log("Grybauti pats tas");
                        }else{
                            //darbo diena
                            console.log("į darbą su dviračiu ");
                        }
                    }else{
                        //Be striukės
                        if (savaitesDiena >= 6 && savaitesDiena < 8){
                            //Savaitgalis
                            console.log("Su mašina į kiną");
                        }else{
                            //darbo diena
                            console.log("Su mašina į darbą ir atsisukt šilumos");
                        }
                    }
                }
            }
        }else{
            //naktis
            if (arLyja){
                //lyja
                if (temp >= kadaSilta){
                    //šilta
                    if (arAsSuStriuke){
                        //Striukė
                        if (savaitesDiena >= 6 && savaitesDiena < 8){
                            //Savaitgalis
                            console.log("Nė pirties nereikia");
                        }else{
                            //darbo diena
                            console.log("Bus dušna miegot");
                        }
                    }else{
                        //Be striukės
                        if (savaitesDiena >= 6 && savaitesDiena < 8){
                            //Savaitgalis
                            console.log("Imam taksą ir į miestą");
                        }else{
                            //darbo diena
                            console.log("Prie PC");
                        }
                    }
                }else{
                    //šalta
                    if (arAsSuStriuke){
                        //Striukė
                        if (savaitesDiena >= 6 && savaitesDiena < 8){
                            //Savaitgalis
                            console.log("Į bariuką?");
                        }else{
                            //darbo diena
                            console.log("Šuo nori į lauką");
                        }
                    }else{
                        //Be striukės
                        if (savaitesDiena >= 6 && savaitesDiena < 8){
                            //Savaitgalis
                            console.log("Pati liūdniausia savaitgalio naktis");
                        }else{
                            //darbo diena
                            console.log("pati liūdniausia naktis");
                        }
                    }
                }
            }else{
                //nelyja
                if (temp >= kadaSilta){
                    //šilta
                    if (arAsSuStriuke){
                        //Striukė
                        if (savaitesDiena >= 6 && savaitesDiena < 8){
                            //Savaitgalis
                            console.log("Į gamtą. Striukė bus vietoje palapinės");
                        }else{
                            //darbo diena
                            console.log("Šokiai su striukėmis");
                        }
                    }else{
                        //Be striukės
                        if (savaitesDiena >= 6 && savaitesDiena < 8){
                            //Savaitgalis
                            console.log("Pati nuostabiausia naktis");
                        }else{
                            //darbo diena
                            console.log("Pati linksmiausia darbadienio naktis");
                        }
                    }
                }else{
                    //šalta
                    if (arAsSuStriuke){
                        //Striukė
                        if (savaitesDiena >= 6 && savaitesDiena < 8){
                            //Savaitgalis
                            console.log("Gerai matysis žvaigždės ir neušalsiu");
                        }else{
                            //darbo diena
                            console.log("Galima prasieiti lauke prieš miegą");
                        }
                    }else{
                        //Be striukės
                        if (savaitesDiena >= 6 && savaitesDiena < 8){
                            //Savaitgalis
                            console.log("Shopping");
                        }else{
                            //darbo diena
                            console.log("Namie su knyga");
                        }
                    }
                }
            }
        }
    }
    console.log('parosMetas', parosMetas, 'arLyja', arLyja, 'temp',  temp, 'kadaSilta', kadaSilta, 'arAsSuStriuke', arAsSuStriuke, 'savaitesDiena', savaitesDiena);
    console.log('monster2End');
} //kaVeikt2 funkcijos pabaiga



/* 
if (parosMetas0 === 'diena') {
    if (arLyja0) {
        if (temp0 >= kadaSilta0)
        console.log('Sokis lietuje')
    } else {
        console.log('Eiline diena rojuje')
    }
} else {
    if (arLyja0) {
        console.log('Sedim namie')
    } else {
        console.log('Einam žiūrėti žvaigždžių');
    }
}

// End reikia užbaigti



const g = 7;
const h = undefined;

if (g <= h) {
    console.log('daugiau arba lygu');
} else {
    console.log('nedaugiau ir nelygu')  // kitaip tariant maziau
}

// tipo tikrinimas         tipo netikrinimas
// !==              vs      !=
// ===              vs      ==

if (7 === '7') { // == išves aaaaaaam  === išves bbbbbbbbb
    console.log('aaaaaaaaaa'); 
} else {
    console.log('bbbbbbbbbb');
}

const w = 'Labas';
const e = 'Labaaaa';

if  (w > e) {
    console.log(`${w} yra daugiau už ${e}` );
} else {
    console.log((`${w} yra maziau arba lygu  ${e}`));
} */

function arLyginis(skaicius){
    // klaidų prevencija
    if ((typeof skaicius === 'number') && skaicius !== Infinity && skaicius !== -Infinity && skaicius !== undefined) {
        // skaičius
        // ar sveikas
        if ((skaicius%1) !==0){
            return `${skaicius} - ne sveikas skaičius`;
        } else {
            // sveikas skaičius. Ar lyginis?
            if ((skaicius%2) !== 0){
                return `${skaicius} - nelyginis skaičius`;
            }else{
                return `${skaicius} - lyginis skaičius`;
            }
        }
    }else{
        // ne skaičius
        return 'ne skaičius';
    }
}

console.log(arLyginis(52));

//console.log(NaN === NaN);

console.clear();

const g = 7;
const h = 5;

if (g !== h) {
    console.log('Ne lygu');
} else {
    console.log('Lygu');
}

console.clear();

// !== vs !=
// === vs ==

if (7 === 7) {
    console.log('aaaaaaaa');
} else {
    console.log('bbbbbbbbb');
}

const w = 'aaaaaaaaaa';
const e = 'abba';

if (w > e) {
    console.log(`"${w}" yra daugiau uz "${e}"`);
} else {
    console.log(`"${w}" yra maziau arba lygu uz "${e}"`);
}

// !true
// !false
if (!true) {
    console.log('gg');
} else {
    console.log('fail...');
}