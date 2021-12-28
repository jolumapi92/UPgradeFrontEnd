import { humanCreate, human } from "./createOneHuman.js";

const btnCreate = document.querySelector('#btn-create-human');
btnCreate.addEventListener( 'click', humanCreate );

console.log(human);
