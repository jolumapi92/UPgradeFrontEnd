//Function to add a new idea to the DOM
import { addAnIdea } from "./inputIdea.js";
import cleanBoard from "./cleanIdeas.js";
import { healingProcess } from "./process.js";

const btnAdd = document.querySelector("#btn-add-idea");
btnAdd.addEventListener('click', addAnIdea);

const btnClean = document.querySelector("#btn-clean");
btnClean.addEventListener('click', cleanBoard);

const btnHeal =  document.querySelector("#btn-heal");
btnHeal.addEventListener( "click", healingProcess );

