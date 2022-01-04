import { Person } from './classes/person.js';


const btn = document.querySelector('#btn-to-create-object') as HTMLButtonElement;
const name = document.querySelector("#name") as HTMLInputElement;
let age = document.querySelector('#age') as HTMLInputElement;
const job = document.querySelector("#job") as HTMLInputElement;


class Human {
    name: string;
    age: number;

    constructor(name: string, age:number) {
        this.name = name;
        this.age = age;
    }
}


btn.addEventListener("click", function(){
    
    const onePerson = new Person( name.value, age.valueAsNumber,  job.value )
    console.log(onePerson);
});