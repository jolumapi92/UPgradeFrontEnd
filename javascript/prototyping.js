// Creating objects through constructors
class CreatedByGod {
}
CreatedByGod.prototype.godsHand = () => { alert("Inheriting this method from gods class") }

class Human extends CreatedByGod {
    
    constructor(name) {
        super();
        this.name = name;
    }
}

//Creating objects through functions with UpperCase convention
function Dog(name) {
    this.name = name;
}

//Changing the pointer of the oobjects prototype towards another prototype
Dog.prototype = CreatedByGod.prototype;

Human.prototype.saySomething = function() { alert(`My name is ${this.name}`) }
Dog.prototype.saySomething = function() { alert("Woof woof Woooooooof") }

const createSomething = () => {
    const name = faker.name.firstName();
    let answer = "";
    do  {
        answer = prompt("Human or Dog").toLowerCase();
        console.log(answer);
    }
    while( (answer != 'dog')  && (answer != 'human' ) )

    if(answer === "dog") {
        const dog = new Dog(name);
        // Directly accesing
        console.log(dog.__proto__.saySomething(), dog.godsHand());
    }

    if(answer == 'human') {
        const human = new Human(name);
        //Looking up for the method 
        console.log(human.saySomething(), human.godsHand());
    }
}

export { createSomething };