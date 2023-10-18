console.clear();
//1 .Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
function actorNameLength(){
    const actorName = 'Jack';
    const actorSurname = 'Nicholson';
    return actorName.length > actorSurname.length ? actorName : actorSurname;
}
//console.log(actorNameLength());


//2. Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
//"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".
function introduction(){
    const myName = 'Arvydas';
    const mySurname = 'Šimbelis';
    const myBirthday = '1982-11-28';
    const today = '2023-10-17';

    const myBirthdayArr = myBirthday.split('-');
    const todayArr = today.split('-');
    const birthYear = +myBirthdayArr[0];
    const todayYear = +todayArr[0];
    const birthdayMonth = +myBirthdayArr[1];
    const todayMonth = +todayArr[1];
    const birthdayDay = +myBirthdayArr[2];
    const todayDay = +todayArr[2];
    
    let myAge = todayYear -  birthYear;

     if (birthdayMonth > todayMonth) {
        myAge--;
    }

    if (birthdayMonth === todayMonth){
        if (birthdayDay > todayDay){
            myAge --;
        }
    }
    return `Aš esu ${myName} ${mySurname}. Man yra ${myAge} metai(ų)`;    
}
//console.log(introduction());

//3. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
function last3(str){
    console.log(str);
    let result = '';
    for (let i = 0; i < 3; i++) {
        //console.log (`i: ${i} ${str[str.length - 3 + i]}`);
        result += str[str.length - 3 + i];
    }
    return result;
}

function actorNameLast3(){
    const actorName = 'Jack';
    const actorSurname = 'Nicholson'
    console.log('1');
    return last3(actorName) + last3(actorSurname);
}
//console.log(actorNameLast3());


//4. Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
function hollywoodStars(){
    const str = 'Once upon a time in hollywood';
    const strLC = str.toLowerCase();

    let result = '';
    for (let i = 0; i < strLC.length; i++) {
        if (strLC[i] === 'o'){
            result += '*';
        } else {
            result += str[i];
        }
    }
    return result;
}
//console.log(hollywoodStars());

//5. Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function random4(){
    const r1 = rand(0, 2);
    const r2 = rand(0, 2);
    const r3 = rand(0, 2);
    const r4 = rand(0, 2);

    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    rStr = '' + r1 +r2 + r3 + r4;
    
    for (let i = 0; i < rStr.length; i++) {
        if (rStr[i] === '0'){count0++}
        if (rStr[i] === '1'){count1++}
        if (rStr[i] === '2'){count2++}
        
    }
    return `0: ${count0} | 1: ${count1} | 2: ${count2}`;
}
//console.log(random4());

//6. Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
function randomDivide(){
    const r1 = rand(0, 4);
    const r2 = rand(0, 4);
    let result = 0;
    let resultStr = '';

    if (r1 > r2 ){
        result = (r1 / r2);
        resultStr = `${r1} / ${r2}`;
    } else {
        result = r2 / r1;
        resultStr = `${r2} / ${r1}`;
    }
    return `${resultStr} =  ${result.toFixed(2)}`;
}
//console.log(randomDivide());

//7. Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite vidurinę reikšmę.
function randMid(){
    const r1 = rand(0, 25);
    const r2 = rand(0, 25);
    const r3 = rand(0, 25);
    
    const rArr = [r1, r2, r3];

    let minNum = [r1];
    let maxNum = [r1];
    let minNumIndex = 0;
    let maxNumIndex = 0;
    let middle =  0;

    for(let i = 1; i < rArr.length; i++) {
        if (rArr[i] < minNum){
            minNum = rArr[i];
            minNumIndex = i;
        }
        if (rArr[i] > maxNum){
            maxNum = rArr[i];
            maxNumIndex = i;
        }

    }

    for (let i = 0; i < rArr.length; i++) {
        if (i != maxNumIndex && i !== minNumIndex){
            middle = rArr[i];
        }
    }
     console.log(rArr);
    return middle;
}
//console.log(randMid());

//8. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
function actorNameFirst1(){
    const actorName = 'Jack';
    const actorSurname = 'Nicholson'
    return actorName[0] + actorSurname[0];
}
//console.log(actorNameFirst1());

//9. Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
/* 
console.log('a'.charCodeAt(0));
console.log('z'.charCodeAt(0));
console.log(String.fromCharCode(97));
console.log(String.fromCharCode(122));
 */

function randomLCString(n){
    let result = '';
    for (let i = 0; i < n; i++) {
        result += String.fromCharCode(rand(97, 122))
    } 
    return result;
}

//console.log(randomLCString(3));





