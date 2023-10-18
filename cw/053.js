console.clear();

function formatDuration (seconds) {
    let s = seconds;
    let m = 0;
    let h = 0;
    let d = 0;
    let y = 0;
    let verbalTime = '';

    if (seconds >= 60){
        m = (seconds - (seconds % 60)) /60; 
        s = seconds % 60;
    }

    if (m >= 60){
        h = (m - (m % 60)) /60; 
        m = m % 60;
    }

    if (h >= 24){
        d = (h - (h % 24)) /24; 
        h = h % 24;
    }

    if (d >= 365){
        y = (d-(d % 365)) / 365;
        d = d % 365;
    }

    s = s > 0 ? s > 1 ? (s + ' seconds') : s + ' second' : ''; 
    m = m > 0 ? m > 1 ? (m + ' minutes') : m + ' minute' : ''; 
    h = h > 0 ? h > 1 ? (h + ' hours') : h + ' hour' : ''; 
    d = d > 0 ? d > 1 ? (d + ' days') : d + ' day' : ''; 
    y = y > 0 ? y > 1 ? (y + ' years') : y + ' year' : ''; 
    
    
        
    
    
    return y + ' ' + d + ' ' + h + ' ' + m + ' ' + s + ' |';
}


console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");