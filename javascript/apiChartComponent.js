import { getINFO } from "./apiConsumption.js";

const template = document.createElement('template');
template.innerHTML = `
    <h1> Bienvenido </h1>
`;

class ChartAPI extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h1').innerText = "Welcome to the jungle"
    }
}

export { ChartAPI };