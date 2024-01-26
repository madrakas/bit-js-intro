console.clear();

function dirReduc(arr){
    let string = arr.join(' ');
    const a = 'NORTH SOUTH';
    const b = 'SOUTH NORTH';
    const c = 'WEST EAST';
    const d = 'EAST WEST';

    while (string.includes(a) || string.includes(b) || string.includes(c) || string.includes(d) || string.includes('  ')){
        string = string.replaceAll(a, '');
        string = string.replaceAll(b, '');
        string = string.replaceAll(c, '');
        string = string.replaceAll(d, '');
        string = string.replaceAll('  ', ' ');
    }

    return string.split(' ').filter(a => a !== '');
}


    
  


console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]);


const a= [ 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST' ];
a.splice(0, 4);

// console.log(a);






// console.clear();

// function dirReduc(arr){
    
//     const result = [];
//     tmpArr = [... arr];

//     for (let i = 0; arr.length > 0; i++) {
//         const check = validator(arr);
        
//         if (check !== null) {
//             arr.splice(0, check);
//         }else{
        
//             result.push(arr.shift());
//         }
//     }
    
//     return result;
    
// }
    
// function validator(arr){
//     if (arr.length === 1){
//         return null;
//     }
//     let x = 0;
//     let y = 0;
//     for (let i = 0; i < arr.length; i++) {
//         switch(arr[i]){
//         case 'NORTH':
//             y++;
//             break;
//         case 'SOUTH':
//             y--;
//             break;
//         case 'EAST':
//             x++;
//             break;
//         case 'WEST':
//             x--;
//             break;
//         }
//         if (x === 0 && y === 0) {
//             return i + 1;
//         } 
//     };         
//     return null;
// }
    