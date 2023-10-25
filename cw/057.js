console.clear();

function bouncingBall(h,  bounce,  window) {
    if ((h < 0) || (bounce < 0) || (bounce >= 1) || (window > h) ){
        return -1;
    }
    
    let n = 0;

    for (let i = h; i > window; ) {
        i = (i * bounce).toFixed(2);
        if (i > window){
            n += 2;
        }else{
            n++;
        }
    }
    return n;
}

//console.log(bouncingBall(3.0, 0.66, 1.5), 3);
console.log(bouncingBall(30.0, 0.66, 1.5), 15);
//console.log(bouncingBall(3.0, 1.0, 1.5), -1);


30      
19.80   
13.07   
8.63    
5.70    
3.76    
2.48    
1.64    
16  