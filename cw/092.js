console.clear();

function meeting(list) {
    const guests = list.toUpperCase().split(';').map(a => a.split(':'))
    .sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        }
        if (b[0] < a[0]) {
            return 1;
        }
        return 0;
    }).sort((a, b) => {
        if (a[1] < b[1]) {
            return -1;
        }
        if (b[1] < a[1]) {
            return 1;
        }
        return 0;
    });
    
    console.log(guests);
    let result = "";
    guests.forEach(guest => {
        result += '(' + guest[1] + ', ' + guest[0] + ')';
    }); 
    return result;
}

console.log(meeting('Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn'));