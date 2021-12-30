import { fetchingINFO } from "./fetch.js";
import { xmlGetInfo } from "./XML.js";

const btnClose = document.querySelector("#close-x");
const btnfetch = document.querySelector("#fetch");
const btnXML = document.querySelector("#xml");

window.addEventListener('keyup', function(e) {
    if( e.key === 'Escape' ) {
        const box = document.querySelector("#blackbox");
        box.style.display = "none";
    }
})

btnfetch.addEventListener( 'click', fetchingINFO );
btnXML.addEventListener( 'click', xmlGetInfo );