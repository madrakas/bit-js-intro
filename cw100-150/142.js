console.clear();

function triangleType(a, b, c){
    // check if it's a triangle
    if (a + b > c && a + c > b && b + c > a) {  
        // find if triangle is acute, right or obtuse
        const a1 = Math.pow(a, 2);
        const b1 = Math.pow(b, 2);
        const c1 = Math.pow(c, 2);

        if (a1 + b1 == c1 || a1 + c1 == b1 || b1 + c1 == a1) {
            return 2;
        } else if (a1 + b1 < c1 || a1 + c1 < b1 || b1 + c1 < a1) {
            return 3;
        } else {
            return 1;
        }
    } else {
        return 0;
    }
}


//   console.log(triangleType(2, 2, 2), 0); // Not triangle
//   console.log(triangleType([7, 3, 2]), 0); // Not triangle
//   console.log(triangleType([7, 3, 2]), 0); // Not triangle
//   console.log(triangleType([2, 4, 6]), 0); // Not triangle
//   console.log(triangleType(8, 5, 7), 1); // Acute
//   console.log(triangleType(3, 4, 5), 2); // Right
  console.log(triangleType(7, 12, 8), 3); // Obtuse
