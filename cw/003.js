
console.clear();

function flip (d, a){
  
    a.sort(function(a, b){return a-b});
    
    if (d === 'L') { 
        a.reverse();
    }
        return a;
    }

  console.log(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
  console.log(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);
  console.log(flip('R', [13, 2, 4, 7, 93]), [ 2, 4, 7, 13, 93 ]);
  

  

