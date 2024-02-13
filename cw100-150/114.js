console.clear();

function getParticipants(handshakes){
   if (handshakes < 1 ) {
    return 0;
   }
   
   let h = 0;
   let i = 1;
   for (; h < handshakes; i++){
        // console.log(i);
        h +=  i;
   }
   return i;
}


console.log(getParticipants(0));

// console.log(getParticipants(0), 0, "0 handshakes");
// console.log(getParticipants(1), 2, "1 handshake");      1
// console.log(getParticipants(3), 3, "3 handshakes");  1+2
// console.log(getParticipants(6), 4, "6 handshakes");  1+2+3
// console.log(getParticipants(7), 5, "7 handshakes");  1+2+3+4



