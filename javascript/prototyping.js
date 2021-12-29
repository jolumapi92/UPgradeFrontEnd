
function Human(name) {
    this.name = name;
}

function Dog(name) {
    this.name = name;
}

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
        console.log(dog.saySomething());
    }

    if(answer == 'human') {
        const human = new Human(name);
        console.log(human.saySomething());
    }
}

export { createSomething };