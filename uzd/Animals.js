console.clear();

class Animal{
    constructor (name, color){
        this.name = name;
        this.color = color;
        this.isAnimal = true;
        this.canTalk = false;  //only parrot can talk
        this.commands = ['Introduce'];
    }

    introduce(){
        return `${this.color} ${this.specie} says: Hi! My name is ${this.name}.`;
    }
}

class Pet extends Animal{
    constructor(name, color){
        super(name, color);
        this.isPet = true;
        this.legsCount = 4;
        this.canYouFly = false;
        this.canSwim = true;
        this.voice = 'Somebody forgot to declare pet voice';
        this.commands.push('playDead', 'showVoice');
    }

    playDead(){
        return (`${this.name} falls on the ground and rolls on it's back.`);
    }

    showVoice(){
        return (`${this.name} says: ${this.voice}!`);
    }
    
}

class Dog extends Pet{
    constructor(name, color){
        super(name, color);
        this.specie = 'dog';
        this.voice =  'Bark bark';
        this.commands.push ('sit', 'stand', 'lay');
        this.position = 'standing';
    }

    sit(){
        this.position = 'sitting';
        return `${this.name} is now ${this.position}.`;
    }

    stand(){
        this.position = 'standing';
        return `${this.name} is now ${this.position}.`;
    }

    lay(){
        this.position = 'laying';
        return `${this.name} is now ${this.position}.`;
    }
}

class Cat extends Pet{
    constructor(name, color){
        super(name, color);
        this.specie = 'cat';
        this.voice = 'Meeeeoooowwww';
        this.commands.push('catThings');
    }
    catThings(){
        return(`${This.color} taps and pushes your cup from the table.`);
    }
}

class Bird extends Animal{
    constructor(name, color){
        super(name, color);
        this.isBird= true;
        this.wingsCount = 2;
        this.legsCount = 2;
        this.canFly = true;
        this.canSwim = false;
    }
}

class Parrot extends Bird{
    constructor(name, color){
        super(name, color);
        this.specie = 'Parrot';
        this.canTalk = true;
        this.commands.push('repeatTwice');
    }

    repeatTwice(text){
        return `${this.name} says: ${text}! ${text}!`;
    }    
}

class Penguin extends Bird{
    constructor(name, color){
        super(name, color);
        this.specie = 'Penguin';
        this.canSwim = true;
        this.canFly = false;
        this.commands.push('canYouFly');
    }

    canYouFly(){
        return `${this.name} starts to sob... You have no heart.`;
    }    
}

class fish extends Animal{
    constructor(name, color){
        super(name, color);
        this.legsCount = 0;
        this.canFly = false;
        this.canSwim = true;
        this.canTalk = false;
    }
}



class Fish extends Animal{
    constructor(name, color){
        super(name, color);
        this.isFish = true;
        this.legsCount = 0;
        this.canFly = false;
        this.canTalk = false;
    }
}


class Goldfish extends fish{
    constructor(name){
        super(name);
        this.color = 'Golden';
        this.specie = 'goldfish';
        this.commands.push('grantAWish');
    }
    grantAWish(wish){
        return `Your wish "${wish}" is granted.`;
    }
}


class Shark extends fish{
    constructor(name, color){
        super(name, color);
        this.specie = 'Shark';
        this.commands.push(isHungry)
    }
    isHungry(){
        return `A sharp fin emerges from dark waters. And a song starts playing. "Baby shark too too too!.."`;
    }
}


const goldie = new Goldfish('Goldie');
console.log(goldie.commands);
console.log(goldie.grantAWish('Take me home'));