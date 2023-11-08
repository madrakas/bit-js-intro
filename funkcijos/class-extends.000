console.clear();

class Pet {
    constructor (name, color) {
        this.name = name;
        this.color = color;
        this.sound = 'Miau Au cypt Cham';
    }

    setColor(newColor){
        this.color(newColor);
    }
    
    sayHi() {
        return `${this.name}: ${this.sound} As esu ${this.color} spalvos`;
    }
}

class Dog extends Pet{
    constructor(name, color) {
        super(name, color);
        this.sound = 'Au Au';
    }

    repeatTwice(){
        return 'Repat in progress';
    }
}

class Cat extends Pet{
    constructor(name, color) {
        super(name, color);
        this.sound = 'Miau miau';
    }
}

class Hamster extends Pet{
    constructor(name, color) {
        super(name, color);
        this.sound = 'Cham cham';
    }
}

const rex = new Dog('Rex', 'juodos');
console.log(rex.repeatTwice());

const garfield = new Cat('Garfield', 'rudos');
console.log(garfield.sayHi());

const tom = new Hamster('Tom', 'pilkos');
console.log(tom.sayHi());