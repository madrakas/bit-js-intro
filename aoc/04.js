console.clear();

input=
`Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

//preparations
const tickets={
};

input.split('\n').forEach((row, ridx) => {
    tickets['ticket' + ridx] = {
        numbers: row.split(':')[1].split('|')[0].trim().replaceAll('  ', ' ').split(' '),
        luckynumbers: row.split(':')[1].split('|')[1].trim().replaceAll('  ', ' ').split(' '),
    }
});

let points = 0;

// validations
for (let i = 0; i < Object.keys(tickets).length; i++) {
    let ticketPoints = 0;
   
    tickets['ticket' + i]['numbers'].forEach(number => {
        if (tickets['ticket' + i].luckynumbers.includes(number)){
            ticketPoints === 0 ? ticketPoints++ : ticketPoints = ticketPoints * 2;
        };
  })
  console.log('t' + i, ticketPoints);
  points += ticketPoints;
}

console.log(points);

// 15987 too high;

// console.log(tickets);

