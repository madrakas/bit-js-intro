/* 
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?
*/

console.clear();

function countAppearance(arr, memb){
    let n = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === memb){
            n++;
        }
    }
    return n;
}

function deleteNth(arr,n){
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (countAppearance(result, arr[i]) < n){
            result.push(arr[i]);
        }
    }
    return result;
}




console.log(deleteNth([20,37,20,21], 1), [20,37,21])
//console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])