console.clear();

function countSmileys(arr) {
    const whitelist = [':)', ':D', ':-)', ':-D', ':~)', ':~D', ';)', 'D', ';-)', ';-D', ';~)', ';~D']
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (whitelist.includes(arr[i])){
            count++;
        }
    }
    return count;
}


console.log(countSmileys([]                             ), 0);
console.log(countSmileys([':D',':~)',';~D',':)']        ), 4);
console.log(countSmileys([':)',':(',':D',':O',':;']     ), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);

