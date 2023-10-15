//k6 primal numbers

function isPrime(num) {

    
    
        if (num === 2 || num === 3)
          return true;
        if (num <= 1 || num % 2 === 0 || num % 3 === 0)
          return false;  
        for (let i = 5; i * i <= num ; i += 6)
          if (num % i == 0 || num % (i + 2) == 0)
            return false;
        return true;


  }

  console.log(isPrime(0),  false, "0 is not prime");
  console.log(isPrime(1),  false, "1 is not prime");
  console.log(isPrime(2),  true, "2 is prime");
  console.log(isPrime(73), true, "73 is prime");
  console.log(isPrime(75), false, "75 is not prime");
  console.log(isPrime(-1), false, "-1 is not prime");