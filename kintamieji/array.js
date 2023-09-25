

const tuscias = [];
console.log(tuscias)

const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai, 'sudaro',pazymiai.length,'skaiciai');

const studentai = ['Jonas','Maryte','Petras','Ona'];
console.log(studentai);

console.log('paskutinis pažymys',pazymiai[pazymiai.length-1]);

const a = "Laužtas\n\rtekstas";
console.log("a:",a);

const testArray = [a];
console.log("testArray:",testArray);



console.clear();

//Pažymių vidurkiai

const p = [1,2,3,4,5,6,7,8,9,10]
const vidurkis = (p[0]+p[1]+p[2]+p[3]+p[4]+p[5]+p[6]+p[7]+p[8]+p[9]) /p.length;
console.log('Pažymių vidurkis:',vidurkis);

//Vietovės
v=["Akmenė","Alytus", "Anykščiai", "Ariogala", "Baltoji Vokė", "Birštonas", "Biržai", "Daugai", "Druskininkai", "Dūkštas", "Dusetos", "Eišiškės", "Elektrėnai", "Ežerėlis", "Gargždai", "Garliava", "Gelgaudiškis", "Grigiškės", "Ignalina", "Jieznas", "Jonava", "Joniškėlis", "Joniškis", "Jurbarkas", "Kaišiadorys", "Kalvarija", "Kaunas", "Kavarskas", "Kazlų Rūda", "Kėdainiai", "Kelmė", "Kybartai", "Klaipėda", "Kretinga", "Kudirkos Naumiestis", "Kupiškis", "Kuršėnai", "Lazdijai", "Lentvaris", "Linkuva", "Marijampolė", "Mažeikiai", "Molėtai", "Naujoji Akmenė", "Nemenčinė", "Neringa", "Obeliai", "Pabradė", "Pagėgiai", "Pakruojis", "Palanga", "Pandėlys", "Panemunė", "Panevėžys", "Pasvalys", "Plungė", "Priekulė", "Prienai", "Radviliškis", "Ramygala", "Raseiniai", "Rietavas", "Rokiškis", "Rūdiškės", "Salantai", "Seda", "Simnas", "Skaudvilė", "Skuodas", "Smalininkai", "Subačius", "Šakiai", "Šalčininkai", "Šeduva", "Šiauliai", "Šilalė", "Šilutė", "Širvintos", "Švenčionėliai", "Švenčionys", "Tauragė", "Telšiai", "Tytuvėnai", "Trakai", "Troškūnai", "Ukmergė", "Utena", "Užventis", "Vabalninkas", "Varėna", "Varniai", "Veisiejai", "Venta", "Viekšniai", "Vievis", "Vilkaviškis", "Vilkija", "Vilnius", "Virbalis", "Visaginas", "Zarasai", "Žagarė", "Žiežmariai"];
vstr='Aš buvau: '+v[0]+ ", " +v[1]+ ", " +v[2]+ ", " +v[3]+ ", " +v[4]+ ", " +v[5]+ ", " +v[6]+ ", " +v[7]+ ", " +v[8]+ ", " +v[9]+ ", " +v[10]+ ", " +v[11]+ ", " +v[12]+ ", " +v[13]+ ", " +v[14]+ ", " +v[15]+ ", " +v[16]+ ", " +v[17]+ ", " +v[18]+ ", " +v[19]+ ", " +v[20]+ ", " +v[21]+ ", " +v[22]+ ", " +v[23]+ ", " +v[24]+ ", " +v[25]+ ", " +v[26]+ ", " +v[27]+ ", " +v[28]+ ", " +v[29]+ ", " +v[30]+ ", " +v[31]+ ", " +v[32]+ ", " +v[33]+ ", " +v[34]+ ", " +v[35]+ ", " +v[36]+ ", " +v[37]+ ", " +v[38]+ ", " +v[39]+ ", " +v[40]+ ", " +v[41]+ ", " +v[42]+ ", " +v[43]+ ", " +v[44]+ ", " +v[45]+ ", " +v[46]+ ", " +v[47]+ ", " +v[48]+ ", " +v[49]+ ", " +v[50]+ ", " +v[51]+ ", " +v[52]+ ", " +v[53]+ ", " +v[54]+ ", " +v[55]+ ", " +v[56]+ ", " +v[57]+ ", " +v[58]+ ", " +v[59]+ ", " +v[60]+ ", " +v[61]+ ", " +v[62]+ ", " +v[63]+ ", " +v[64]+ ", " +v[65]+ ", " +v[66]+ ", " +v[67]+ ", " +v[68]+ ", " +v[69]+ ", " +v[70]+ ", " +v[71]+ ", " +v[72]+ ", " +v[73]+ ", " +v[74]+ ", " +v[75]+ ", " +v[76]+ ", " +v[77]+ ", " +v[78]+ ", " +v[79]+ ", " +v[80]+ ", " +v[81]+ ", " +v[82]+ ", " +v[83]+ ", " +v[84]+ ", " +v[85]+ ", " +v[86]+ ", " +v[87]+ ", " +v[88]+ ", " +v[89]+ ", " +v[90]+ ", " +v[91]+ ", " +v[92]+ ", " +v[93]+ ", " +v[94]+ ", " +v[95]+ ", " +v[96]+ ", " +v[97]+ ", " +v[98]+ ", " +v[99]+ ", " +v[100]+ ", " +v[101]+ ", " +v[102]+".";
console.log(vstr);

const stud1 = ["Vardenis", "Pavardenis"];
const stud2 = ["Jonas", "Jonaitis"];
const stud3 = ["Petras", "Petraitis"];
const stud4 = ["Ona", "Onaitienė"];
const class1 = [stud1, stud2];
const Class2 = [stud3, stud4];
const students = [class1,Class2];
//console.log(students[0][1][0], students[1][1][0]);
//console.log(students);

const marks = [10, 2, 8, 4, 6];
//const marksSum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
let marksSum = 0;

// marksSum = marksSum + marks[0];
marksSum += marks[0];
marksSum += marks[1];
marksSum += marks[2];
marksSum += marks[3];
marksSum += marks[4];

const marksAverage = marksSum / marks.length;
const studentmarks = `Studento pažymių vidurkis yra ${marksAverage}`;
console.log(marksAverage);
console.log(marks.ilgis);
marksSum = 'Testas';
console.log(marksSum);

let placesStr = '';
placesStr += v[0];
placesStr += ', ';
placesStr += v[1];
placesStr += ', ';
placesStr += v[2]

console.log(`Mano aplankytos vietos: ${placesStr}`);

console.clear();

const colors  = ['geltona', 'zalia', 'raudona'];

console.log(colors);
console.log(colors[1]);

colors[1] = 777;
console.log(colors);

colors[1] = 'žalia';
console.log(colors);


let name = 'Chuck';
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);

console.log(name.length);

name[0] = 'H';
console.log (name); // vis tiek outputas bus Chack

name = "Hhuck";
console.log (name); // Outputas bus Hhack