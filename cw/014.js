// K8 sėmkės

console.clear();

function summation (num) {
    let numSum = 1;
    let numSeq = '(1';
    for (i = 2 ; i < num; i++){
      numSum += i;
      numSeq += ' + ' + i
    }
    if (num > 1){
        numSeq += ' + ' + num + ')'
        numSum += num; 
    }else{
        return '1';
    }
    return numSum + ' ' + numSeq;
  }

console.log("'" + summation(1) + "'");

console.clear();

function min(a){
    a.sort(function(a, b){return a-b});
    return a[0];
}

console.log(min([34, 15, 88, 2]));
console.log(min([34, -345, -1, 100]));

function past(h, m, s){
    return ((s) + (m * 60)  + ( h * 3600)) * 1000;
}

console.log(past(0,1,1));


console.clear();
function digitize(n) {
    const nStr = '' + n;
    const arr = nStr.split('');
    return arr.sort(function(a, b){return a-b});
  }

  console.log(digitize([35231]));

  console.clear();

  function maps(x){
    for (let i = 0; i < x.length; i++){
        if (x[i] === true){
            x[i] = false;
        } else if (x[i] === false){
            x[i] = true;
        } else{
            x[i] = x[i] * 2;  
        }
    }
    return x;
  }

  console.log(maps([1, 2, 3, true]));

  console.clear()

function century(year){
    year = (year / 100);
    yearRem = (year % 1);
    if (yearRem > 0){
        year = year - (year % 1);
    } else{
        year--;
    }
 return (year + 1) + ' | ' + (yearRem);
}

  
console.log(century(1705), 18, 'Testing for year 1705');
console.log(century(1900), 19, 'Testing for year 1900');
console.log(century(1601), 17, 'Testing for year 1601');
console.log(century(2000), 20, 'Testing for year 2000');
console.log(century(89), 1, 'Testing for year 89');

console.clear();

function litres(time){
    time = time * 1000;
    result = time / 2000;
    return result - result % 1;
}

console.log(litres(2), 1, 'should return 1 litre'); 
console.log(litres(1.4), 0, 'should return 0 litres');
console.log(litres(12.3), 6, 'should return 6 litres');
console.log(litres(0.82), 0, 'should return 0 litres');
console.log(litres(11.8), 5, 'should return 5 litres');
console.log(litres(1787), 893, 'should return 893 litres');
console.log(litres(0), 0, 'should return 0 litres');