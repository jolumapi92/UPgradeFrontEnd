
function Human(name) {
    this.name = name;
    this.saySomething = function() { alert(`My name is ${this.name}`) }
}

function Dog(name) {
    this.name = name;
    this.saySomething = function() { alert("Woof woof Woooooooof") }
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

    alert("Cleared")
}

export { createSomething };