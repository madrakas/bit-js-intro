console.clear();

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