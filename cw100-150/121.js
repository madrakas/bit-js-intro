console.clear();

<<<<<<< HEAD
function streetFighterSelection(fighters, position, moves){
    const maxY = fighters.length - 1;
    const result = [];

    // console.log(position);

    for (let i = 0; i < moves.length; i++) {
        const maxX = fighters[0].length - 1;
        const move = moves[i];
        switch (move) {
            case 'up':
                if (position[0] > 0){
                    position[0]--;
                }
                break;
            case 'down':
                if (position[0] < maxY) {
                    position[0]++;
                }
                break;
            case 'left':
                if (position[1] > 0){
                    position[1]--;
                } else {
                    position[1] = maxX;
                }
                break;
            case 'right':
                if (position[1] < maxX){
                    position[1]++;
                } else {
                    position[1] = 0;
                }
                break;
        }       
        // console.log(position);
        result.push(fighters[position[0]][position[1]]);
    }
    return result;
}

  fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
  ];

  initial_position = [0,0];

  moves = ['up', 'left', 'right', 'left', 'left'];

console.log(streetFighterSelection(fighters, initial_position, moves));
=======
function kebabize(str) {
    const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    const letters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "
    return str.split('')
        .filter(a => caps.includes(a.toUpperCase()))
        .map(a => caps.includes(a) ? ' ' + a.toLowerCase() : a)
        .join('')
        .trim().replaceAll(' ',  '-');
}


// console.log ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase());
// console.log(kebabize('MyCamelCasedString'), 'my-camel-cased-string');
// console.log(kebabize('MyCamelCasedString'), 'my-camel-cased-string');
// console.log(kebabize('myCamelCasedString'), 'my-camel-cased-string');
console.log(kebabize('MyCamelHas3Humps'), 'my-camel-has-humps');
// console.log(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');
// console.log(kebabize('CAMEL'), 'c-a-m-e-l');
// console.log(kebabize('cAMEL'), 'c-a-m-e-l');
// console.log(kebabize('AbstractSingletonProxyFactoryBean'), 'abstract-singleton-proxy-factory-bean');
// console.log(kebabize('abstractSingletonProxyFactoryBean'), 'abstract-singleton-proxy-factory-bean');
>>>>>>> 64c38eaaa93b06a08931e5daa38460bdd4ff9e22
