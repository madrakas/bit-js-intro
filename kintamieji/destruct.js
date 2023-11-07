console.clear();

const marks = [10, 2, 8, 4, 6];
const mark1 = marks[0];
const mark2 = marks[1];
const mark3 = marks[2];
const othermarks = [
    marks[3], 
    marks[4],
];

console.log(mark1, mark2, mark3, othermarks);

const [m1, m2, m3, ...otherMs] = marks;
console.log(m1, m2, m3, otherMs);


console.clear();

const user = {
    name: 'Jonas', 
    age: 99,
    isMarried: true,
    children: [
        {
            name: 'Maryte',
            age: 88,
        },
        {
            name: 'Petras',
            age: 77,
        }
    ],
};

// const name = user.name;
// const age = user.age;
// const isMarried = user.isMarried;

// console.log(name, age, isMarried);

const { name, age, children, isMarried} = user;

console.log(isMarried, age);
console.log(children);


const zip = 123123;
const street = 'Guobų g.';
const houseNo = 13;

/* const address = {
    zip: zip,
    gatve: street,
    houseNr: houseNo
}; */

const address = { zip, street, houseNo};

console.log(address);

