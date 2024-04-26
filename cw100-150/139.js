console.clear();

function sortByBit(arr) {
    // your solution here
    const newOrder = arr.reduce((a, num, idx) => {
        const order = (num >>> 0).toString(2).split('')
            .filter(a => a === '1').length;
            if (a[order]) {
                a[order].push({'number':num, 'id':idx});
            }else{
                a[order] = [{'number':num, 'id':idx}];
            }
        return a;
    }, {});

    const newMap = Object.keys(newOrder).reduce((a, key) => {
        const extract = newOrder[key].sort((a, b) => a.number - b.number).map(el => el.id);
        return [...a, ...extract];
    },[]);

    arr.sort((a, b) => ( newMap.indexOf(arr.indexOf(a)) - newMap.indexOf(arr.indexOf(b)) ));

    return arr;
    
}

console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]), [1, 8, 3, 3, 5, 6, 9, 7]);
// console.log(sortByBit([7, 6, 15, 8]), [8, 6, 7, 15]);



// console.log((8 >>> 0).toString(2));
// console.log((1 >>> 0).toString(2));