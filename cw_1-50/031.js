//k5

//move zeroes
//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

console.clear();

function moveZeros(Arr){
    const result =[];
    zCount=0;

    console.log(Arr.length);
    for (let i = 0; i < Arr.length; i++){
        console.log('Im in...');
        
        if(Arr[i] === 0){
            zCount++;
        }else{
            console.log(Array.isArray(Arr));
            result.push(Arr[i]);
        }
    }
    for(i = 0; i < zCount; i++ ){
        result.push(0);
    }
    return result;
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);

