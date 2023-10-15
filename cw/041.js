console.clear();

function getDrinkByProfession(param){
    const drinks = ["Jabroni", "School Counselor", "Programmer", "Bike Gang Member", "Politician", "Rapper"];
    //let paramFix = param.replaceAll('0', 'o');
    const paramFix = param.toLowerCase();

    for (let i = 0; i < drinks.length; i++) {
        drinks[i] = drinks[i].toLowerCase();
    }


    const ingredients= ["Patron Tequila", "Anything with Alcohol", "Hipster Craft Beer", "Moonshine", "Your tax dollars", "Cristal"];
    
    console.log(drinks.indexOf(paramFix));
    console.log(paramFix);
    return drinks.indexOf(paramFix) >=0 ? ingredients[drinks.indexOf(paramFix)] : "Beer";
}


//console.log(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
 console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
// console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
// console.log(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
// console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
// console.log(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
// console.log(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
// console.log(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");

