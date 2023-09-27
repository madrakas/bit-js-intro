console.clear();

function tuscia() {
    //tuscias logikos blokas
}

console.log(tuscia());
console.log(tuscia());

function tuscia2() {
    return undefined;
}

console.log(tuscia2());
console.log(tuscia2());

function tuscia3() {
    return;
}

console.log(tuscia3());
console.log(tuscia3());

function duokPenkis(){
    // gražina penkis
    return 5;
}

console.log(duokPenkis());

function arVedes(){
    return true;
}

// 1) uzdavinys

const userName1 = 'Jonas';
const userAge1 = 99;

//Jonas turėjo 9 jubilieju/-s

const jubSk = (userAge1 - userAge1 % 10) / 10;
const user1Str = userName1 + ' turėjo ' + jubSk +  ' jubilieju/-s';
console.log(user1Str);


// Marytė turėjo 8 jubilieju/-s
const userName2 = 'Marytė';
const userAge2 = 88;

const jubSk2 = (userAge2 - userAge2 % 10) / 10;
const user2Str = userName2 + ' turėjo ' + jubSk2 +  ' jubilieju/-s';
console.log(user2Str);

// Petras turėjo 5 jubilieju/-s
const userName3 = 'Petras';
const userAge3 = 55;

const jubSk3 = (userAge3 - userAge3 % 10) / 10;
const user3Str = userName3 + ' turėjo ' + jubSk3 +  ' jubilieju/-s';
console.log(user3Str);

// Ona turėjo 4 jubilieju/-s
const userName4 = 'Ona';
const userAge4 = 44;

const jubSk4 = (userAge4 - userAge4 % 10) / 10;
const user4Str = userName4 + ' turėjo ' + jubSk4 +  ' jubilieju/-s';
console.log(user4Str);

function jubiliejai(username, age = 22){
    const JubSk = (age - age % 10) / 10;   
    return `${username} turėjo ${JubSk} jubilieju/-s`;
}

console.log(jubiliejai('Jonas', 99));
console.log(jubiliejai('Marytė', 88));
console.log(jubiliejai('Petras', 55));
console.log(jubiliejai('Ona', 44));

function studentAverage(name, marks){
    let totalSum = 0;
    let i = 0;
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];

    const average = totalSum / marks.length
    return `${name}: pazymiu vidurkis yra ${average}.`;
}

console.log(studentAverage('Jonas',[10, 2, 8, 4, 6]));
console.log(studentAverage('Maryte',[10, 9, 8, 7, 6]));
console.log(studentAverage('Petras',[5, 6, 7, 8, 9]));
console.log(studentAverage('Ona',[9, 9, 9, 9, 9]));