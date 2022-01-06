import { Person } from './classes/person.js';
import { CardPerson } from './webComponents/cardPerson.js';


const btn = document.querySelector('#btn-to-create-object') as HTMLButtonElement;
const name = document.querySelector("#name") as HTMLInputElement;
let age = document.querySelector('#age') as HTMLInputElement;
const job = document.querySelector("#job") as HTMLInputElement;
window.customElements.define('user-card', CardPerson);


btn.addEventListener("click", function(){
    
    const onePerson = new Person( name.value, age.valueAsNumber,  job.value )
    let section = document.querySelector('#insert-here-person')!
    let card = document.createElement('user-card');
    card.shadowRoot!.querySelector('h2')!.innerText = name.value;
    card.shadowRoot!.querySelector('h4')!.innerText = Math.floor(Math.random() * 100).toString();
    card.shadowRoot!.getElementById('job')!.innerText = job.value;
    card.shadowRoot!.getElementById('age')!.innerText = age.value;
    section.appendChild(card);
    
    
});