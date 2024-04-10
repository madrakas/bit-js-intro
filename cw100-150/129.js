console.clear();

function bingo(ticket, win){
    const miniWins = ticket.reduce((total, combo) => {
        const char = String.fromCharCode(combo[1]);
        if (combo[0].includes(char)) {
            return total + 1;
        } else {
            return total;
        }
    }, 0);

    return miniWins >= win ? 'Winner!' : 'Loser!';
}





console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
// console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
// console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');
