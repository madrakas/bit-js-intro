console.clear();

function createSecretHolder(secret) {
    const obj = {}
    Object.defineProperty(obj, 'privateField', {value: secret, enumerable: false, writable: true});
    obj['getSecret'] = () => obj['privateField'];
    obj['setSecret'] = (newSecret) => obj.privateField = newSecret;
    return obj;
}



obj = createSecretHolder(5)

console.log(obj);
console.log(obj.getSecret());  //# returns 5
console.log(obj.setSecret(2));
console.log(obj.getSecret()) //# returns 2
