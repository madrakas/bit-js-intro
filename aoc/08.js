console.clear();

const fs = require('fs');
const { getDefaultHighWaterMark } = require('stream');
fs.readFile('.\\aoc\\08.json', 'utf-8', function (err, data) {
    if (err) throw err;
     workwork(JSON.parse(data));
 })

// input = {
//     '11A': ['11B', 'XXX'],
//     '11B': ['XXX', '11Z'],
//     '11Z': ['11B', 'XXX'],
//     '22A': ['22B', 'XXX'],
//     '22B': ['22C', '22C'],
//     '22C': ['22Z', '22Z'],
//     '22Z': ['22B', '22B'],
//     'XXX': ['XXX', 'XXX'],
// }

// workwork(input);

function workwork (input){
    const photos =[];
    const ghosts = [];

    Object.keys(input).forEach(key =>{
        
        if (key[2]==='A'){
            ghosts.push([key, key[0]+key[1]+'Z']);
        }
    });

    console.log(ghosts);
    console.log(ghosts.length);
    console.log('Started');
 
    const directions ="LLLRLRLRLLRRRLRRRLRRRLLLRLRLLRRLLRRLRLRLLRLRLRRLLRRRLRLLRRLRRRLRRLLLRRRLRRRLRRRLLLLRRLRRRLRLRRRLRRLLRLRLRRRLRRRLRRLRRRLLLLLLRLRRRLLLLRLRRRLRRRLRLRRLRLRLRLRLRRRLLRRLRLRRLRRLRRLLRLLLRRLRLLRRLRLRRLRRRLRRLLRLRLRLRRLLRLLRRLLLRLRLRRRLRRLLRRRLRLRLRRLLRLRLRLRRLRLRLRRLRRLLRRLRRRLRRRLLLRRRR";
    //  const directions ="LR";

    let maxGoods = 0;
    let i = 0;
    let counter = 0;
    let allGood =false;
    let rounds = 0;

    for (; allGood === false; ){
        counter++;
        rounds++;

        if (i > directions.length - 1){ //start over if all directions used
            i = 0;
        }
        if (directions[i]==='L'){
            ghosts.forEach(ghost =>(ghost[0] = (input[ghost[0]][0])));
        }else if(directions[i]==='R'){
            ghosts.forEach(ghost =>(ghost[0] = (input[ghost[0]][1])));
        } else{
            console.log('Bad direction');
            break;
        }
        
        let gg = true;
                        
        for (let x = 0; x < 6; x++) {
                        
            // console.log(counter, ':', ghosts[x][0][2], '!=="Z"?' );
            if (ghosts[x][0][2] !== 'Z'){
                gg = false;
                break;
            }
        }
      
           if (gg){allGood = true}

        i++;
    }
    console.log(ghosts);
    console.log(counter);
    console.log('ph:',photos);
}
  
   