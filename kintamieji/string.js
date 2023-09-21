const txt1="tekstas";
const txt2='tekstas';

//console.clear();

console.log("txt1", txt1);
console.log("txt2", txt2);

const kabute1 = "Vienguba kabute (')";
console .log(kabute1);

const kabute2 = 'Dviguba kabute (")';
console .log(kabute2);

const kabute121 = "Vienguba (') ir dviguba (\") kabutes";
console .log(kabute121);

const kabute122= 'Vienguba (\') ir dviguba (") kabutes';
console .log(kabute122,);

const kabute123= 'Vienguba (\') ir dviguba (\") kabutes';
console .log(kabute123,);

const back = '\\';
console.log(back);

const doubleback = '\\\\';
console.log(doubleback);

// /n = new line
// \r = return

const formatuotasTekstas = "Labas\nrytas,\nLietuva!";
console.log(formatuotasTekstas);

/* Labas
        rytas,
              Lietuva! */

const formatuotasTekstas2 = "Labas\rrytas,\rLietuva!" ;
console.log(formatuotasTekstas2);

/* Labas <- (į eilutės pradžią) rytas, <- (į eilutės pradžią)
Reuslt "Lietuva!"
*/

const gg = 'gggggggggggg\raaaa\rbbb\rxx';
console.log(gg);

const lrl = 'Labas\n\r\
rytas\n\r\
Lietuva';
console.log(lrl);
//aaaa

const lrl2 = `Labas
rytas
Lietuva`;
console.log("Bactikas: ",lrl2);
// veiks tik ant modernių naršyklių (2018+)

const vardas = 'Chuck';
console.log(vardas, " = ", vardas.length, "simboliai");

const pavarde = 'Norris';
console.log(vardas, " ", pavarde, pavarde.length+vardas.length);
const fullname = vardas + " " + pavarde;
console.log(fullname);

const labas = 'Labas';
const parosMetas = 'vakaras';
const Valstybe = 'Latvija';

const lrl3 = `${labas}  ${parosMetas} ${Valstybe}`;
console.log(lrl3);

const lrl4 = `Labas rytas, Lietuva`;
console.log(lrl4);

console.clear();

const n1 = 5 + 7;
console.log(n1);

const n2 = 5 + '7';
console.log(n2);

const n3 = '5' + 7;
console.log(n3);

const n4 = '5' + '7';
console.log(n4);

const n5 = '5' - 7;
console.log(n5);

const n6 = 5 - '7';
console.log(n6);

const n7 = '5' - '7';
console.log(n7);

