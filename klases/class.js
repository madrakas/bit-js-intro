console.clear();

class Dog {
    // konstruktorius
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.age = 0;
    }
    //metodas
    setAge(naujasAmzius){
        if (typeof naujasAmzius !== 'number'){
            return 'Error turi būti skaičius.';
        }
        this.age = naujasAmzius; 
        return naujasAmzius;
    }

    hello() {
        return `Au Au mano vardas ${this.name}`;
    }
}


const rex = new Dog('Rex', 'black');
const brisius = new Dog('Brisius', 'white');
rex.setAge(7);

// rex.amzius = 1; // nenaudotina


console.log (brisius.hello());
console.log(rex);
console.log(brisius);




