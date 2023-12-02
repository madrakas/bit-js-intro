console.clear();

function queueTime(customers, n) {
    if (customers.length===0) {
        return 0;
    }
    
    let cust=[...customers];
    // cust.sort((a, b) => (b - a));
    
    let time = 0;

    for (; cust.length > 0; ) {
        for (let i = 0; i < n; i++) {
            cust[i]--;
        }
        time++;
        cust=[...cust.filter(c => (c > 0))];
        console.log('time', time, 'customers', cust);
    }
    return time;
  }

  
console.log(queueTime([], 1), 0);
console.log(queueTime([1,2,3,4], 1), 10);
console.log(queueTime([2,2,3,3,4,4], 2), 9);
console.log(queueTime([4,4,3,3,2,2], 2), 9);
console.log(queueTime([1,2,3,4,5], 100), 5);
console.log(queueTime([5,3,4],    1), 12);
console.log(queueTime([10,2,3,3], 2), 10);
console.log(queueTime([2,3,10,2], 2), 12);