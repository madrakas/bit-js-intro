console.clear();

function domainName(url){
    url = url.replaceAll('https://', '');
    url = url.replaceAll('http://', '');
    const main =url.split('/')[0].split('.');
    return main.length > 2 ? main[1].length > 2 ? main[1] : main[0] : main[0];

    
}

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");