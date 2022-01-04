let mario = "mario";
let number = 12;

let juan: string;
let juanito: string = "Juanito";

let functionTest: Function;

functionTest = (): void => {
    console.log("Mario Kart is an excellent video game");
}

const say = ():string => 
{
    return "Hello World"
}

const askMeYourName = (name: string, age: number):string => 
{
    return `Hello your name is ${name} and your age is ${age}`
}


let logDetails: ( obj: { name: string, age: number } ) => void;

logDetails = (ninja: { name: string, age: number }) => {
    console.log(`Your name is ${ninja.name} and is ${ ninja.age }`)
}



logDetails({ name: "Manuel de Dios", age: 31 });

const names: (string|number)[] = [];

names.push("Juan");
names.push(27);

let giveYourName: (name: string, age: number | string) => void;

giveYourName = (a: string, b: number | string) => {
    console.log( a, b )
 }

giveYourName("Joselito", 29);

let landingPhrase = document.querySelector('#title') as HTMLParagraphElement;
console.log(landingPhrase.innerText );


class Humanoid {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName () {
        return `My name is ${this.name}`
    }
}

let juanDeDios = new Humanoid("Juanito", 30);

console.log( juanDeDios.getName() )

