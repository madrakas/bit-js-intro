console.clear();

function diamond(n){
    if (n < 1 || n % 2 === 0){
        return null;
    }

    
    const data = [];
    data.push(n);
    let counter = 0;

    for (let i = n - 2 ; i > 0; i -= 2) {
        data.push(i);
        data.unshift(i);
    }
    console.log((n / 2).toFixed());
    console.log(data);
    let result = '';

    data.forEach(element => (result += ' '.repeat((n - element)/2) + '*'.repeat(element) + '\n' ));
    return result;

  }

  console.log(diamond(1), "*\n");
  console.log(diamond(3), " *\n***\n *\n");
  console.log(diamond(5), "  *\n ***\n*****\n ***\n  *\n");