console.clear();


function humanReadable (seconds) {
    const hours = parseInt(seconds / 3600);
    seconds -= hours * 3600;
    const minutes = parseInt(seconds / 60)
    seconds -= minutes * 60;
    return ('' + hours).padStart(2, 0) + ':' +  ('' + minutes).padStart(2, 0) + ':' + ('' + seconds).padStart(2, 0);
}


    console.log(humanReadable(0), '00:00:00');
    console.log(humanReadable(59), '00:00:59');
    console.log(humanReadable(60), '00:01:00');
    console.log(humanReadable(90), '00:01:30');
    console.log(humanReadable(3599), '00:59:59');
    console.log(humanReadable(3600), '01:00:00');
    console.log(humanReadable(45296), '12:34:56');
    console.log(humanReadable(86399), '23:59:59');
    console.log(humanReadable(86400), '24:00:00');
    console.log(humanReadable(359999), '99:59:59');
