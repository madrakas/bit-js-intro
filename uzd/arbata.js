/* 
Evenas nori sukurti labai paprastą arbatpinigių skaičiuotuvą, kai jis eina valgyti į 
restoraną. Jo šalyje įprasta duoti 15 % arbatpinigių, jei sąskaitos vertė yra nuo 50 iki 300. 
Jei vertė skiriasi, arbatpinigiai yra 20%.
Jūsų užduotys:
	
Apskaičiuokite arbatpinigių, priklausomai nuo sąskaitos vertės. Sukurkite kintamąjį pavadinimu „Tip“.
Neleidžiama naudoti if/else teiginio  (Jei jums taip lengviau, galite
pradėti nuo if/else teiginio, tada pabandykite jį konvertuoti į ternery
operator!)

Į konsole atspausdinkite eilutę, kurioje yra sąskaitos vertė, arbatpinigiai ir galutinė vertė
(sąskaita + arbatpinigiai). Pavyzdys: „Sąskaita buvo 275, arbatpinigiai 41,25, o bendra vertė
316,25"

Bandymo duomenys:
§ 1 duomenys: patikrinkite sąskaitos reikšmes 275, 40 ir 430
 */

console.clear();

function buhalteris (saskaita){
    let arbata = saskaita / 100;
    arbata = saskaita >= 50 || saskaita <= 300 ? (arbata * 15).toFixed(2) : (arbata * 20).toFixed(2);
    return (`Sąskaita buvo ${saskaita}, arbatpinigiai ${arbata}, bendra vertė ${(+saskaita) + (+arbata)}`);
}

console.log(buhalteris(275));
console.log(buhalteris(41));
console.log(buhalteris(25));